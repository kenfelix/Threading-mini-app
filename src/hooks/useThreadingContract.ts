import { useState } from "react";
import Threading from "../contracts/threading";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";

export function useThreadingContract() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const threadingContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Threading(
      Address.parse(
        network === CHAIN.MAINNET
          ? ""
          : "EQD-ZGPMdDioBoHRWxmTH5BkY_8ZvU3u1uBYP_hrGe5311r0"
      ) // replace with your address from tutorial 2 step 8
    );
    return client.open(contract) as OpenedContract<Threading>;
  }, [client]);

  const { data, isFetching } = useQuery(
    ["threading"],
    async () => {
      if (!threadingContract) return null;
      return (await threadingContract.getUserList())
    },
    {
      refetchInterval: 3000,
      staleTime: 60000,
      cacheTime: 300000,
    }
  );

  return {
    isFetching,
    value: data?.values().toString(),
    address: threadingContract?.address.toString(),
    sendWithdraw: (referrer: string) => {
      return threadingContract?.send(
        sender,
        {
          value: toNano("0.38")
        },
        {
          $$type: "Withdraw",
          amount: toNano("0.3"),
          data: Address.parse(referrer)
        }
      );
    },
  };
}

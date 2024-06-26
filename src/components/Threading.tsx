import { TonConnectButton } from "@tonconnect/ui-react";
import { useThreadingContract } from "../hooks/useThreadingContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";

export function Threading() {
  const { connected } = useTonConnect();
  const {value, address, sendWithdraw, isFetching } = useThreadingContract();

  return (
    <div className="Container">
        
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3>Threading</h3>
          <FlexBoxRow>
            <b>Address</b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div>{isFetching ? `${value} (refreshing...)` : value}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            className={`Button ${connected ? "Active" : "Disabled"}`}
            onClick={() => {
              sendWithdraw("EQB2GmX3ESvI-meFAtFj7PRNaBnokvepihuoAlWtIFoTgJcv");
            }}
          >
            Join
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}

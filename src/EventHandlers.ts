/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AprMON,
  AprMON_Approval,
  AprMON_BurnableSharesUpdated,
  AprMON_Deposit,
  AprMON_FeeVaultUpdated,
  AprMON_Initialized,
  AprMON_LastProcessedBlockNumberUpdated,
  AprMON_LastProcessedRequestIdUpdated,
  AprMON_MinimumRedeemUpdated,
  AprMON_NextRequestIdUpdated,
  AprMON_OperatorSet,
  AprMON_OracleDataUpdate,
  AprMON_OracleOperatorUpdated,
  AprMON_OwnershipTransferred,
  AprMON_Paused,
  AprMON_Redeem,
  AprMON_RedeemRequest,
  AprMON_RedeemRequestUpdated,
  AprMON_RewardFeeUpdated,
  AprMON_RewardFeesAccumulatedUpdated,
  AprMON_StakePoolUpdated,
  AprMON_Sweeped,
  AprMON_TotalPendingDepositUpdated,
  AprMON_TotalStakedUpdated,
  AprMON_Transfer,
  AprMON_Unpaused,
  AprMON_WithdrawalFeeUpdated,
  AprMON_WithdrawalFeesAccumulatedUpdated,
  AprMON_WithdrawalWaitTimeUpdated,
  User
} from "generated";

AprMON.Approval.handler(async ({ event, context }) => {
  const entity: AprMON_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.AprMON_Approval.set(entity);
});

AprMON.BurnableSharesUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_BurnableSharesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    burnableShares: event.params.burnableShares,
  };

  context.AprMON_BurnableSharesUpdated.set(entity);
});

AprMON.Deposit.handler(async ({ event, context }) => {
  const entity: AprMON_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.AprMON_Deposit.set(entity);

  let user = await context.User.get(event.params.owner);
  if (!user) {
    user = {
      id: event.params.owner,
    }
  } 
  context.User.set(user);
});

AprMON.FeeVaultUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_FeeVaultUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    protocolFeeVault: event.params.protocolFeeVault,
  };

  context.AprMON_FeeVaultUpdated.set(entity);
});

AprMON.Initialized.handler(async ({ event, context }) => {
  const entity: AprMON_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.AprMON_Initialized.set(entity);
});

AprMON.LastProcessedBlockNumberUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_LastProcessedBlockNumberUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastProcessedBlockNumber: event.params.lastProcessedBlockNumber,
  };

  context.AprMON_LastProcessedBlockNumberUpdated.set(entity);
});

AprMON.LastProcessedRequestIdUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_LastProcessedRequestIdUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastProcessedRequestId: event.params.lastProcessedRequestId,
  };

  context.AprMON_LastProcessedRequestIdUpdated.set(entity);
});

AprMON.MinimumRedeemUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_MinimumRedeemUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minimumRedeem: event.params.minimumRedeem,
  };

  context.AprMON_MinimumRedeemUpdated.set(entity);
});

AprMON.NextRequestIdUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_NextRequestIdUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    nextRequestId: event.params.nextRequestId,
  };

  context.AprMON_NextRequestIdUpdated.set(entity);
});

AprMON.OperatorSet.handler(async ({ event, context }) => {
  const entity: AprMON_OperatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.AprMON_OperatorSet.set(entity);
});

AprMON.OracleDataUpdate.handler(async ({ event, context }) => {
  const entity: AprMON_OracleDataUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: event.params.blockNumber,
    totalPendingDeposit: event.params.totalPendingDeposit,
    totalStaked: event.params.totalStaked,
    burnableShares: event.params.burnableShares,
    lastProcessedRequestId: event.params.lastProcessedRequestId,
    rewardFeesAccumulated: event.params.rewardFeesAccumulated,
  };

  context.AprMON_OracleDataUpdate.set(entity);
});

AprMON.OracleOperatorUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_OracleOperatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oracle: event.params.oracle,
  };

  context.AprMON_OracleOperatorUpdated.set(entity);
});

AprMON.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: AprMON_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AprMON_OwnershipTransferred.set(entity);
});

AprMON.Paused.handler(async ({ event, context }) => {
  const entity: AprMON_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.AprMON_Paused.set(entity);
});

AprMON.Redeem.handler(async ({ event, context }) => {
  const entity: AprMON_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    receiver: event.params.receiver,
    requestId: event.params.requestId,
    shares: event.params.shares,
    assets: event.params.assets,
    fee: event.params.fee,
  };

  context.AprMON_Redeem.set(entity);
});

AprMON.RedeemRequest.handler(async ({ event, context }) => {
  const entity: AprMON_RedeemRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    owner: event.params.owner,
    requestId: event.params.requestId,
    sender: event.params.sender,
    shares: event.params.shares,
    assets: event.params.assets,
  };

  context.AprMON_RedeemRequest.set(entity);
});

AprMON.RedeemRequestUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_RedeemRequestUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    requestId: event.params.requestId,
    redeemData_0: event.params.redeemData
        [0]
    ,
    redeemData_1: event.params.redeemData
        [1]
    ,
    redeemData_2: event.params.redeemData
        [2]
    ,
    redeemData_3: event.params.redeemData
        [3]
    ,
    redeemData_4: event.params.redeemData
        [4]
    ,
  };

  context.AprMON_RedeemRequestUpdated.set(entity);
});

AprMON.RewardFeeUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_RewardFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardFee: event.params.rewardFee,
  };

  context.AprMON_RewardFeeUpdated.set(entity);
});

AprMON.RewardFeesAccumulatedUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_RewardFeesAccumulatedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardFeesAccumulated: event.params.rewardFeesAccumulated,
  };

  context.AprMON_RewardFeesAccumulatedUpdated.set(entity);
});

AprMON.StakePoolUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_StakePoolUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakePool: event.params.stakePool,
  };

  context.AprMON_StakePoolUpdated.set(entity);
});

AprMON.Sweeped.handler(async ({ event, context }) => {
  const entity: AprMON_Sweeped = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    amount: event.params.amount,
  };

  context.AprMON_Sweeped.set(entity);
});

AprMON.TotalPendingDepositUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_TotalPendingDepositUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    totalPendingDeposit: event.params.totalPendingDeposit,
  };

  context.AprMON_TotalPendingDepositUpdated.set(entity);
});

AprMON.TotalStakedUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_TotalStakedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    totalStaked: event.params.totalStaked,
  };

  context.AprMON_TotalStakedUpdated.set(entity);
});

AprMON.Transfer.handler(async ({ event, context }) => {
  const entity: AprMON_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.AprMON_Transfer.set(entity);
});

AprMON.Unpaused.handler(async ({ event, context }) => {
  const entity: AprMON_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.AprMON_Unpaused.set(entity);
});

AprMON.WithdrawalFeeUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_WithdrawalFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalFee: event.params.withdrawalFee,
  };

  context.AprMON_WithdrawalFeeUpdated.set(entity);
});

AprMON.WithdrawalFeesAccumulatedUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_WithdrawalFeesAccumulatedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalFeesAccumulated: event.params.withdrawalFeesAccumulated,
  };

  context.AprMON_WithdrawalFeesAccumulatedUpdated.set(entity);
});

AprMON.WithdrawalWaitTimeUpdated.handler(async ({ event, context }) => {
  const entity: AprMON_WithdrawalWaitTimeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalWaitTime: event.params.withdrawalWaitTime,
  };

  context.AprMON_WithdrawalWaitTimeUpdated.set(entity);
});

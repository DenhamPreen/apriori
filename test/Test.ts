import assert from "assert";
import { 
  TestHelpers,
  AprMON_Approval
} from "generated";
const { MockDb, AprMON } = TestHelpers;

describe("AprMON contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AprMON contract Approval event
  const event = AprMON.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AprMON_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AprMON.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAprMONApproval = mockDbUpdated.entities.AprMON_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAprMONApproval: AprMON_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAprMONApproval, expectedAprMONApproval, "Actual AprMONApproval should be the same as the expectedAprMONApproval");
  });
});

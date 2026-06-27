const testExecutionSummary = {
  suiteName: 'Regression Suite',
  totalTests: 50,
  passedTests: 45,
  failedTests: 5,
  executionTime: '12m 30s',
};

console.log('Suite Name:', testExecutionSummary.suiteName);
console.log('Total Tests:', testExecutionSummary.totalTests);
console.log('Passed Tests:', testExecutionSummary.passedTests);
console.log('Failed Tests:', testExecutionSummary.failedTests);
console.log('Execution Time:', testExecutionSummary.executionTime);

const passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log('Pass Percentage:', passPercentage + '%');

console.log('Execution Status:', testExecutionSummary.failedTests === 0 ? 'PASS' : 'FAIL');

if (testExecutionSummary.failedTests === 0) {
  console.log('Execution Successful');
} else {
  console.log('Execution Completed with Failures');
}
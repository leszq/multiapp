module.exports = {
  name: 'multiapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/multiapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

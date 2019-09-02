module.exports = {
  name: 'package2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/package2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

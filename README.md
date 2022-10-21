# testcafe-browser-provider-puppeteer-coverage

This is the [puppeteer-coverage](https://pptr.dev/api/puppeteer.coverage)/chromium browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).
It runs tastcafe e2e tests headless and stores code coverage in an istanbul compatible format using [puppeteer-to-istanbul](https://github.com/istanbuljs/puppeteer-to-istanbul)

This is a fork of [testcafe-browser-provider-puppeteer](https://github.com/jdobosz/testcafe-browser-provider-puppeteer). Everything regarding the configuration applies to this.

## Install

```cmd
npm install --save-dev testcafe-browser-provider-puppeteer-coverage
```

## Usage

When you run tests from the command line, use the provider name when specifying browsers:

```cmd
testcafe puppeteer-coverage 'path/to/test/file.js'
```

When you use the API, pass the provider name to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('puppeteer-coverage')
    .run();
```

## Coverage

Running the tests creates a `.nyc_output` directory.
Use for example `nyc report --reporter=html` to create a human readable coverage report.

## Caveats

It is not (yet) possible to use sourcemaps to map the coverage back to the original sources.
This is because

* [source-map](https://github.com/mozilla/source-map/issues/261) has some difficulties
finding the correct position in the original source.
* coverage ranges may span multiple input files

## Workarounds

In order to analyze the coverage, the bundle should be kept in a human readable format.

## Device Emulation

If you want to emulate another device you can run `pupeteer:emulate=<Device name>`. The supported devices are listed in the [Puppeteer DeviceDescriptors](https://github.com/puppeteer/puppeteer/blob/master/lib/DeviceDescriptors.js).

## Troubleshooting

On same older linux distributions, fails chromium due to sandbox issues - see [this](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-fails-due-to-sandbox-issues).

You can try in such case running the plugin without sandbox restriction

 ```cmd
testcafe puppeteer:no_sandbox 'path/to/test/file.js'
```

In order to speedup CI you can provide custom executable of chromium browser instead to download it all the time:

```javascript
runner
  .browsers(['puppeteer-coverage:no_sandbox?/usr/bin/chromium-browser'])


runner
  .browsers(['puppeteer-coverage:?/usr/bin/chromium-browser'])
```

## Author

Hauke Thorenz

## Contributors

Jacek Dobosz

Lukasz Szmit

Pedro Scaff

Bhavdeep Dhanjal

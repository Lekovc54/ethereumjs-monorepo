window.BENCHMARK_DATA = {
  "lastUpdate": 1654684752122,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07a6d2e8a672d6bebad57a1e9df80c3e735fbf2e",
          "message": "set caller to zero address if not provided (#1840)",
          "timestamp": "2022-04-06T13:35:45-07:00",
          "tree_id": "4bc9ccccadb2c8b44254d9851d7ee71145ce5cbd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/07a6d2e8a672d6bebad57a1e9df80c3e735fbf2e"
        },
        "date": 1649277609974,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20241,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21819,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17458,
            "range": "±16.70%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19511,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19671,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bd84986578095565600f668ec86453675ec4294",
          "message": "client: move TxPool to FullEthereumService (#1853)\n\n* move txpool from FullSync to FullEthereumService\r\nremove execution from client class\r\n* move execution init to service\r\n* use pool peer count directly now\r\n* nit (dedupe `any` cast)",
          "timestamp": "2022-04-09T10:41:43-07:00",
          "tree_id": "3f5834e55ed34f683845856e138227947c588469",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1bd84986578095565600f668ec86453675ec4294"
        },
        "date": 1649526512040,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19331,
            "range": "±8.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20740,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16419,
            "range": "±17.26%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19994,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19254,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4463730eaf081c19102816829926a9b699d1f9",
          "message": "Common: fixed non-option passing on custom() method (#1851)\n\n* Common: fixed non-option passing on custom() method\r\n* Common: custom options test sanity check (review suggestion)\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n* lint, fix test\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-09T10:53:02-07:00",
          "tree_id": "da80442adf461a715b48e66e0219bb3d69de4546",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1f4463730eaf081c19102816829926a9b699d1f9"
        },
        "date": 1649527304257,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19100,
            "range": "±8.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20376,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16726,
            "range": "±15.67%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19765,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19482,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7d4193c60da23793660967a31f4c6d3c2055d7",
          "message": "VM: Custom precompiles (#1813)\n\n* vm/precompiles: do not export precompiles list\r\n\r\n* vm: change precompile logic, use maps\r\n\r\n* vm/tests: ensure these run\r\n\r\n* vm: fixed custom precompile bugs\r\n\r\n* vm: add custom precompile tests\r\n\r\n* review, clean up, nits\r\n\r\n* add _customPrecompiles to stateManager\r\n\r\n* vm: fixes custom opcodes\r\n\r\n* vm: re-export precompiles\r\n\r\n* vm: attempt to fix ci\r\n\r\n* vm: experiment 2 to fix CI\r\n\r\n* vm: add public precompile method, remove experiment\r\n\r\n* vm: fix CI\r\n\r\n* vm: change function sig\r\n\r\n* vm: remove TODO\r\n\r\n* vm: remove precompile logic from statemanager\r\n\r\n* vm: remove customprecompiles from statemanager\r\n\r\n* vm: use `precompiles` getter\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-13T18:53:03+02:00",
          "tree_id": "81edd7896101775c22e29e832c7ce94593446b2a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1d7d4193c60da23793660967a31f4c6d3c2055d7"
        },
        "date": 1649869326119,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21989,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22903,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19848,
            "range": "±13.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22374,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21982,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "moodysalem@users.noreply.github.com",
            "name": "Moody Salem",
            "username": "moodysalem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2707449df4521bfc5c3edc728d70e582b2320f3a",
          "message": "VM: revert TSTORE opcode if in static context (#1821)\n\n* revert TSTORE opcode if in static context\r\n\r\n* merge transient storage on commit",
          "timestamp": "2022-04-13T19:23:21+02:00",
          "tree_id": "8e7c41f48ee92dcbde34df1e4bd10f516114c9fd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2707449df4521bfc5c3edc728d70e582b2320f3a"
        },
        "date": 1649870849588,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19320,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20507,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16590,
            "range": "±15.19%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20034,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19744,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b0fb9d889a65edf3964f1e90e922fae7dd6327c",
          "message": "New Minor VM v5.9 Release, Client and Common Bugfix Releases (#1856)\n\n* Common: Bumped version to v2.6.4, Updated CHANGELOG (VM, Client CHANGELOG as well), updated upstream dependency versions\r\n\r\n* Common: rebuild documentation\r\n\r\n* VM: bumped version to v5.9.0, updated upstream dependency versions\r\n\r\n* CLient: bumped version to v0.4.1\r\n\r\n* rename MergeForkBlock to MergeForkIdTransition for increased clarity\r\n\r\n* changelog updates/typos/fixes\r\n\r\n* common: rebuild docs for renaming to MergeForkIdTransition\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-14T11:58:22+02:00",
          "tree_id": "b7cdb0e60d5ddf081439c0f46e410f811101cc55",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6b0fb9d889a65edf3964f1e90e922fae7dd6327c"
        },
        "date": 1649930558270,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22300,
            "range": "±5.10%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23155,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19822,
            "range": "±11.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22569,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21998,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02f6988eabb2e9970c77064c940db227cd91eca3",
          "message": "client: make some `eth_` methods available on engine endpoint as per kiln spec v2.1 (#1855)\n\n* Make available some eth_ methods on engine endpoint as per kiln spec v2.1\r\n* other methods as mandated by kiln v2.1\r\n* sample test check for eth_ method availability on engine rpc\r\n* update tests will remaining eth method check on engine\r\n* log nits\r\n* test nits\r\n* nit: replace reduce with for of loop\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-15T12:23:27-07:00",
          "tree_id": "cc6fd6e124ef421c7a9fb95b5396d1e1982e6b8c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/02f6988eabb2e9970c77064c940db227cd91eca3"
        },
        "date": 1650050858521,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22059,
            "range": "±5.66%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23113,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19849,
            "range": "±12.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22783,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22458,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "moodysalem@users.noreply.github.com",
            "name": "Moody Salem",
            "username": "moodysalem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5bb01e4054e10417ac85133f1bc7ef0b33b9cfd",
          "message": "fix: improve the time complexity of commit by using a journal instead of stack of maps (#1860)\n\nthis is necessary because created a large call stack, then writing a bunch of keys and having all the calls return could potentially DOS the client",
          "timestamp": "2022-04-20T16:29:42+02:00",
          "tree_id": "92ac5d0ce596e9396e99c2a771305133e172d0b7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d5bb01e4054e10417ac85133f1bc7ef0b33b9cfd"
        },
        "date": 1650465263127,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18345,
            "range": "±8.71%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20012,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16075,
            "range": "±15.46%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19469,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19284,
            "range": "±3.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da4bf645e9066d7b88c991bb6a5a823ba19d4ce6",
          "message": "client: refac services, syncronizers and fetchers for beacon sync (#1858)\n\n* refac client services, syncronizers and fetcher for beacon sync\r\n\r\n* derive height in the constructor itself\r\n\r\n* fix tests\r\n\r\n* fix tests\r\n\r\n* enqueueByNumberList changes\r\n\r\n* enqueueByNumberList test fixes\r\n\r\n* move processBlocks to full sync it will be a syncronizer based behavior\r\n\r\n* move processBlock to previous location to potentially reduce diff\r\n\r\n* fix event listeners\r\n\r\n* reorder for test coverage\r\n\r\n* typo fix",
          "timestamp": "2022-04-21T09:41:18+02:00",
          "tree_id": "8e67dc51f356dee084332914e96dfc1af0db36cd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/da4bf645e9066d7b88c991bb6a5a823ba19d4ce6"
        },
        "date": 1650527180290,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16410,
            "range": "±7.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17967,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15111,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15985,
            "range": "±24.44%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17220,
            "range": "±4.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c429125d034e4fdf9aacd9cd4ebb2049dd55d666",
          "message": "pass the maxFetcherJobs arg to the config (#1861)",
          "timestamp": "2022-04-21T06:00:45-07:00",
          "tree_id": "f1bc3284e29c0f065babb8563127d3f9a93204a5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c429125d034e4fdf9aacd9cd4ebb2049dd55d666"
        },
        "date": 1650546364676,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15458,
            "range": "±6.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14627,
            "range": "±14.13%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15724,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13005,
            "range": "±16.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16209,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6d828b31bc557d294250fa4cd09c7cca2b32a81",
          "message": "nits, improvements, cleanup after #1858 (#1863)",
          "timestamp": "2022-04-22T07:12:04-07:00",
          "tree_id": "9d67a7743c4216e8c398bbcb7855e23df6f1998d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e6d828b31bc557d294250fa4cd09c7cca2b32a81"
        },
        "date": 1650636994853,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19365,
            "range": "±9.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20526,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16718,
            "range": "±14.19%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19950,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19393,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80117772+rodrigoherrerai@users.noreply.github.com",
            "name": "Rodrigo Herrera Itie",
            "username": "rodrigoherrerai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "083e2b2c2e57dc7da62b2e8deed69fd8e777ecbf",
          "message": "Fix example links (#1864)\n\n* Update README.md\n\n* Update README.md\n\n* Update README.md\n\n* Update README.md",
          "timestamp": "2022-04-23T21:43:14-04:00",
          "tree_id": "4b9dada4d52b8ad5bf0a0138ecda399c857bb6f9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/083e2b2c2e57dc7da62b2e8deed69fd8e777ecbf"
        },
        "date": 1650764942967,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10718,
            "range": "±4.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10513,
            "range": "±8.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11234,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11151,
            "range": "±4.62%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9090,
            "range": "±16.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrev.terron@gmail.com",
            "name": "André Vitor Terron",
            "username": "andreterron"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b180d8f259bc355130f89b0efcc69bd9fd1a855",
          "message": "Fix broken Readme link to run the VM in a browser (#1865)\n\nClicking on the \"Running the VM in a browser\" link was resulting in a 404 error.\r\nThis change adds the `.js` extension to the URL, fixing the issue.",
          "timestamp": "2022-04-25T02:29:53-07:00",
          "tree_id": "e855c2a6f23499a94c73df4bfe2cf26df9ad0dcb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7b180d8f259bc355130f89b0efcc69bd9fd1a855"
        },
        "date": 1650879314812,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11520,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11316,
            "range": "±5.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11646,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9886,
            "range": "±17.76%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11753,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "22412996+zemse@users.noreply.github.com",
            "name": "soham",
            "username": "zemse"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cef5878daedd7a8f589e33dd119376889330f4b",
          "message": "vm/docs: mention that stack in step event can change (#1868)",
          "timestamp": "2022-04-28T16:03:37-07:00",
          "tree_id": "70a728aa7a94f9fe929c2c232a647016e22d1cc0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8cef5878daedd7a8f589e33dd119376889330f4b"
        },
        "date": 1651187325962,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16000,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17050,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15328,
            "range": "±9.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12229,
            "range": "±27.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16533,
            "range": "±3.52%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5851e721061b95a358d5bb07f5574a1b37fb3b2c",
          "message": "bump devp2p to v4.2.2, add changelog entries (#1872)",
          "timestamp": "2022-05-02T14:50:53+02:00",
          "tree_id": "e46a352d7ec33aaf3a3d14d8f56fc78d04d1ca3a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5851e721061b95a358d5bb07f5574a1b37fb3b2c"
        },
        "date": 1651496146807,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16371,
            "range": "±8.03%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18068,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14026,
            "range": "±17.24%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17277,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17022,
            "range": "±4.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e1c3cf9c47bfc037182c275f46eef405ef70dca",
          "message": "devp2p: remove async dep from integration tests (#1875)",
          "timestamp": "2022-05-03T13:21:17+02:00",
          "tree_id": "5db995c0ce2f15d580849cc9f9b9c570678a0782",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8e1c3cf9c47bfc037182c275f46eef405ef70dca"
        },
        "date": 1651577151863,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18678,
            "range": "±7.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20328,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16204,
            "range": "±17.80%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19360,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18965,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4217ed683c362626e3dd07c5ceb73bb75ca66242",
          "message": "client: add missing tx fields to getBlockByHash (#1881)\n\n* client: add missing tx fields to getBlockByHash\r\n\r\n* Add test for \"includeTransactions\"\r\n\r\n* Fix test\r\n\r\n* numbers to hex\r\n\r\n* DRY\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-05-16T10:57:12+02:00",
          "tree_id": "0d18b1f277631066e33bbc197f9e425ce17a26fa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4217ed683c362626e3dd07c5ceb73bb75ca66242"
        },
        "date": 1652691764819,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11594,
            "range": "±3.88%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11521,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11925,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10104,
            "range": "±14.34%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11777,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2f20d0a1745072422a0ffd3528640c4af9d6fcd",
          "message": "Tx: Ensure TxOptions propagate from unsigned to signed (#1884)\n\n* tx: ensure TxOptions propagate from unsigned to signed\r\n\r\n* tx: ensure TxOptions propagate from unsigned to signed\r\n\r\n* tx: take common from tx.common when signing\r\n\r\n* tx: fix typo\r\n\r\n* tx: address review",
          "timestamp": "2022-05-16T22:02:22+02:00",
          "tree_id": "8c36512584f73a0792f4f34c2562d0c4bccfe8a4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c2f20d0a1745072422a0ffd3528640c4af9d6fcd"
        },
        "date": 1652731662650,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23569,
            "range": "±9.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23220,
            "range": "±10.19%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21083,
            "range": "±16.37%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24979,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22173,
            "range": "±11.79%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a8b13bbb2f9d7f29af13fad033307222c5edb8",
          "message": "Update tests to 10.4 (#1896)\n\n* Update tests to 10.4\r\n* tx: fix test runner",
          "timestamp": "2022-05-18T21:17:43-07:00",
          "tree_id": "8e05b38a378db233ec9eb1a07a8fb6d927eada2a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/64a8b13bbb2f9d7f29af13fad033307222c5edb8"
        },
        "date": 1652934128767,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19799,
            "range": "±7.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21034,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17947,
            "range": "±11.78%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20509,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20390,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8fd471f2ba89c0464f2411d599fad0e468b9613",
          "message": "Client/TxPool: add tx validation (#1852)\n\n* client/txpool: add gas price bump check\r\n\r\n* txpool: add more validation logic\r\n\r\n* client: update txpool checks\r\n\r\n* client: fix some tests\r\n\r\n* client: fix txpool tests\r\n\r\n* client: add txpool tests\r\n\r\n* txpool: add signed check\r\n\r\n* client: add more txpool tests\r\n\r\n* client: lint\r\n\r\n* client/txpool: balance test\r\n\r\n* client: fix miner tests\r\n\r\n* client: fix txpool hash messages to show hex values\r\n\r\n* client: fix dangling promises in txpool tests\r\n\r\n* client: fix sendRawTransaction tests\r\n\r\n* client/txpool: track tx count\r\n\r\n* client/txpool: increase coverage\r\ntests: improve error messages\r\n\r\n* client/txpool: update tests\r\n\r\n* client: add local txpool test for eth_sendRawTransaction\r\n\r\n* txpool: add FeeMarket gas logic\r\ntxpool: add basefee checks\r\n\r\n* client: address review\r\n\r\n* client/txpool: fix tests\r\n\r\n* client/txpool: increase coverage\r\n\r\n* client/txpool: fix broadcast\r\n\r\n* client/test/miner: address review",
          "timestamp": "2022-05-19T21:48:16+02:00",
          "tree_id": "5564653391906921ef5d681de97dfccb107cb265",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8fd471f2ba89c0464f2411d599fad0e468b9613"
        },
        "date": 1652989991883,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17339,
            "range": "±7.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18749,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16266,
            "range": "±12.16%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17868,
            "range": "±5.21%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18281,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdfbe37c8b29f29a6ca86881b7c136a6fded7443",
          "message": "client: optimistic (beacon) sync (#1878)\n\n* beacon sync (optimistic sync) implementation\r\n\r\nCo-authored-by: harkamal <gajinder@g11.in>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-05-20T09:31:38-07:00",
          "tree_id": "63488b0531166e410dc880d88b8f01307d905c89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bdfbe37c8b29f29a6ca86881b7c136a6fded7443"
        },
        "date": 1653064574625,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19032,
            "range": "±9.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20385,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16638,
            "range": "±16.13%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19734,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19805,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "42338831+theNvN@users.noreply.github.com",
            "name": "Naveen Sahu",
            "username": "theNvN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7cc1b15d1fd9d58e4ae7db794674c3af4da5ae",
          "message": "fix: expand memory on reading prev. untouched location (#1887)\n\n* fix: expand memory on reading prev. untouched location\r\n\r\nMemory is expanded by word when accessing previously untouched memory word ([relevant docs](https://docs.soliditylang.org/en/v0.8.13/introduction-to-smart-contracts.html#storage-memory-and-the-stack)). That applies to read operation on memory too.\r\n\r\n* fix: properly auto-expand memory on read/write\r\n\r\n* test: add tests for memory expansion on access\r\n\r\nRemoved a couple of tests for write beyond capacity.\r\nThis is because memory is now auto expanded during write.",
          "timestamp": "2022-05-23T17:47:19+02:00",
          "tree_id": "9209821f596fe17181d15f87bae21db67e085ce6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0b7cc1b15d1fd9d58e4ae7db794674c3af4da5ae"
        },
        "date": 1653321122149,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19029,
            "range": "±7.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20281,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16779,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19841,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20113,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a133e27f98f3dd919594ddd2cce8db53edcbbef2",
          "message": "client: small engine updates (#1902)\n\n* simplify txpool, fix runExecution, allow safe block to also be zeros during transition\r\n* fix beacon sync skeleton fill with new vmexecution.run loop param",
          "timestamp": "2022-05-25T16:53:19-07:00",
          "tree_id": "e02703f878196d5bcdb1e9f7e1e1449018246213",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a133e27f98f3dd919594ddd2cce8db53edcbbef2"
        },
        "date": 1653523104635,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16076,
            "range": "±7.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17453,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16664,
            "range": "±6.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11682,
            "range": "±23.43%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16925,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b993aa8a8b47ffe4266fac8932322f516d6b8e4",
          "message": "VM/tests: ensure verifyPostConditions works (#1900)\n\n* vm/tests: ensure verifyPostConditions works\r\n\r\n* vm/tests/util: update output\r\n\r\n* vm/tests/util: make storage comments more clear",
          "timestamp": "2022-05-26T20:07:53+02:00",
          "tree_id": "ded1aee0cee912ceea1bb1248e5fe35b35153e93",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2b993aa8a8b47ffe4266fac8932322f516d6b8e4"
        },
        "date": 1653589098301,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17663,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18684,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14643,
            "range": "±16.86%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18156,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17756,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f42dcfedd18852fc95cc4a51da606dfcbf87387",
          "message": "client: Subsume engine's INVALID_TERMINAL_BLOCK into INVALID response (#1919)",
          "timestamp": "2022-05-28T12:55:20-07:00",
          "tree_id": "3055fd31eb58947f3472867f023e0d99e5db45d8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2f42dcfedd18852fc95cc4a51da606dfcbf87387"
        },
        "date": 1653768050660,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10228,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 9810,
            "range": "±7.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10447,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9685,
            "range": "±11.13%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10696,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernestognw@gmail.com",
            "name": "Ernesto García",
            "username": "ernestognw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30ca12e6e38d107aa80e0b626078a345ff0f06f2",
          "message": "Util: Allow `v` to be `0` or `1` for EIP1559 transactions (#1905)\n\n* Util: Allow v to be `0` or `1` for EIP1559 transactions\r\n\r\n* vm: fix ecrecover precompile for v=0 and v=1\r\n\r\n* tx/legacyTransaction: add `v` guard for non-EIP155 txs\r\n\r\n* tx: switch to earlier v validation and throwing before v common/EIP-155 determination logic\r\n\r\n* tx: remove v==0 check which always defaults to the default common\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-05-31T19:54:41+02:00",
          "tree_id": "925f79a30206c16ad2a48f8ed17e6f5a001fc0c1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/30ca12e6e38d107aa80e0b626078a345ff0f06f2"
        },
        "date": 1654020000853,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10951,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11627,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10522,
            "range": "±10.65%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12023,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11931,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52c6d52230c02ecf2bc9c5438c3271bd9a092061",
          "message": "Last round of master v5 Releases (#1927)\n\n* Monorepo: updated package-lock.json\r\n\r\n* Util: bumped version to v7.1.5, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Util: rebuild documentation\r\n\r\n* Tx: bumped version to v3.5.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM: bumped version to v5.9.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Client: bumped version to v0.5.0, added CHANGELOG entry, updated README\r\n\r\n* Nits\r\n\r\n* Update packages/client/README.md\r\n\r\nCo-authored-by: g11tech <gajinder@g11.in>\r\n\r\n* Update packages/client/CHANGELOG.md\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: g11tech <gajinder@g11.in>",
          "timestamp": "2022-06-02T11:41:51+02:00",
          "tree_id": "970b0d128b7a491190af9de19d8e87a3d973c357",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/52c6d52230c02ecf2bc9c5438c3271bd9a092061"
        },
        "date": 1654163381659,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21553,
            "range": "±5.89%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22636,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19123,
            "range": "±12.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22091,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22047,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e266fffa37ca3c154d9f7efa5ef2033f42f50a9",
          "message": "Monorepo: updated package-lock.json (#1929)",
          "timestamp": "2022-06-02T12:10:55+02:00",
          "tree_id": "98a1c3465c82fb798c224bd1ba212b1abf7762cb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5e266fffa37ca3c154d9f7efa5ef2033f42f50a9"
        },
        "date": 1654164952637,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19064,
            "range": "±8.48%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20132,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16079,
            "range": "±18.29%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20123,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19981,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e4e7bed681bfa6d1c95abbcc28f6508e828339d",
          "message": "Blockchain: Clique-recently-signed False Positive Fix (#1931)\n\n* Blockchain: fixed a bug in Clique-related recently signed check to only compare on recently signed counts if block numbers are consecutive\r\n* Update packages/blockchain/src/index.ts\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-06-02T13:14:19-07:00",
          "tree_id": "c11f4630dfc52852aae11c1f43b26f898d020742",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3e4e7bed681bfa6d1c95abbcc28f6508e828339d"
        },
        "date": 1654201199483,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10647,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10069,
            "range": "±10.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10935,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10880,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10643,
            "range": "±4.14%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "distinct": true,
          "id": "4481cf2d3f69bc35be343e5ae6709434eb2add9d",
          "message": "Monorepo: fixed eslint-plugin-typestrict dependency to v1.0.3 to avoid version conflicts due to eslint-plugin update to v5, rebuild package-lock.json",
          "timestamp": "2022-06-08T12:33:27+02:00",
          "tree_id": "16513b64e2581a33967777befc712bb1ac16c353",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4481cf2d3f69bc35be343e5ae6709434eb2add9d"
        },
        "date": 1654684751601,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 27049,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25607,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26476,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21338,
            "range": "±16.54%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 26048,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      }
    ]
  }
}
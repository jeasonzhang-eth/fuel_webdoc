import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: '/webdoc/',
  title: "Fuel 中文社区",
  description: "Fuel China Community",
  ignoreDeadLinks: true,
  markdown: {
    languageAlias: {
      'sway': 'rs'
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://fuellabs.github.io/fuels-ts/favicon.ico', type: 'image/png' }],
    ['style', {}, `#app > div > header::before {
  content: "Fuel 已上线主网，最新的中文文档还在翻译中，敬请期待！";
  display: block;
  padding: 0 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 36px;
  text-align: center;
  background-color: #00ea82;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#app > div > header + div {
  padding-top: calc(var(--vp-nav-height) + 36px);
}
`],
  ],
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/168461719',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Awesome-Fuel', link: 'https://fuellabs.notion.site/Awesome-Fuel-7b4ca6b262d3414a9968f275cba43fc9' },
      // {
      //   text: "示例",
      //   items: [
      //     { text: "构建市场dApp", link: "/sway-market" },
      //     // { text: "v0.0.2", link: "" },
      //     // { text: "v0.0.3", link: "" },
      //   ],
      // },
      // {
      //   text: "版本",
      //   items: [
      //     { text: "v0.0.1", link: "" },
      //     { text: "v0.0.2", link: "" },
      //     { text: "v0.0.3", link: "" },
      //   ],
      // },
      { text: '贡献者们', link: '/team_member.md' },
    ],

    sidebar: {
      "/swaybook": [
        {
          text: '1. 简介',
          collapsed: false,
          link: '/swaybook/introduction/',
          items: [
            { text: '1.1 入门指南', link: '/swaybook/introduction/getting_started' },
            { text: '1.2 Fuel 工具链', link: '/swaybook/introduction/fuel_toolchain' },
            { text: '1.3 Forc 项目', link: '/swaybook/introduction/forc_project' },
            { text: '1.4 标准库', link: '/swaybook/introduction/standard_library' },
            { text: '1.5 核心库', link: '/swaybook/introduction/core_library' },
            { text: '1.6 sway标准', link: '/swaybook/introduction/sway_standards' }
          ],

        },
        {
          text: '2. 示例',
          collapsed: false,
          link: '/swaybook/examples/' ,
          items: [
            { text: '2.1 计数器', link: '/swaybook/examples/counter' },
            { text: '2.2 菲兹巴兹', link: '/swaybook/examples/fizzbuzz' },
            { text: '2.3 钱包智能合约', link: '/swaybook/examples/wallet_smart_contract' },
            { text: '2.4 流动性池示例', link: '/swaybook/examples/liquidity_pool' }
          ]
        },
        {
          text: '3. Sway程序类型',
          collapsed: false,
          link: '/swaybook/sway-program-types/',
          items: [
            { text: '3.1 合约', link: '/swaybook/sway-program-types/smart_contracts' },
            { text: '3.2 库', link: '/swaybook/sway-program-types/libraries' },
            { text: '3.3 脚本', link: '/swaybook/sway-program-types/scripts' },
            { text: '3.4 谓词', link: '/swaybook/sway-program-types/predicates' }
          ]
        },
        {
          text: '4. Sway语言基础',
          collapsed: false,
          link: '/swaybook/basics/',
          items: [
            { text: '4.1 变量', link: '/swaybook/basics/variables' },
            { text: '4.2 内置类型', link: '/swaybook/basics/built_in_types' },
            { text: '4.3 常用库类型', link: '/swaybook/basics/commonly_used_library_types' },
            { text: '4.4 区块链类型', link: '/swaybook/basics/blockchain_types' },
            { text: '4.5 函数', link: '/swaybook/basics/functions' },
            { text: '4.6 结构体、元组和枚举', link: '/swaybook/basics/structs_tuples_and_enums' },
            { text: '4.7 方法和函数', link: '/swaybook/basics/methods_and_associated_functions' },
            { text: '4.8 常量', link: '/swaybook/basics/constants' },
            { text: '4.9 评论和记录', link: '/swaybook/basics/comments_and_logging' },
            { text: '4.10 控制流', link: '/swaybook/basics/control_flow' }
          ]
        },
        {
          text: '5. 使用 Sway 进行区块链开发',
          collapsed: false,
          link: '/swaybook/blockchain-development/',
          items: [
            {text: '5.1 哈希和密码学', link: '/swaybook/blockchain-development/hashing_and_cryptography'},
            {text: '5.2 合约存储', link: '/swaybook/blockchain-development/storage'},
            {text: '5.3 函数纯度', link: '/swaybook/blockchain-development/purity'},
            {text: '5.4 标识符', link: '/swaybook/blockchain-development/identifiers'},
            {text: '5.5 原生资产', link: '/swaybook/blockchain-development/native_assets'},
            {text: '5.6 访问控制', link: '/swaybook/blockchain-development/access_control'},
            {text: '5.7 调用合约', link: '/swaybook/blockchain-development/calling_contracts'},
            {text: '5.8 外部代码执行', link: '/swaybook/blockchain-development/external_code'}
          ]
        },
        {
          text: '6. 高级概念',
          collapsed: false,
          link: '/swaybook/advanced/',
          items: [
            {text: '6.1 高级类型', link: '/swaybook/advanced/advanced_types'},
            {text: '6.2 泛型类型', link: '/swaybook/advanced/generic_types'},
            {text: '6.3 特征', link: '/swaybook/advanced/traits'},
            {text: '6.4 关联类型', link: '/swaybook/advanced/associated_types'},
            {text: '6.5 泛型和特征约束', link: '/swaybook/advanced/generics_and_trait_constraints'},
            {text: '6.6 组装', link: '/swaybook/advanced/assembly'},
            {text: '6.7 never类型', link: '/swaybook/advanced/never_type'}
          ]
        },
        {
          text: '7. 常用集合',
          collapsed: false,
          link: '/swaybook/common-collections/',
          items: [
            { text: '7.1 堆上的向量', link: '/swaybook/common-collections/vec' },
            { text: '7.2 储存的向量', link: '/swaybook/common-collections/storage_vec' },
            { text: '7.3 储存映射', link: '/swaybook/common-collections/storage_map' },
          ]
        },
        {
          text: '8.  测试 ',
          collapsed: false,
          link: '/swaybook/testing/',
          items: [
            { text: '8.1 单元测试', link: '/swaybook/testing/unit-testing' },
            { text: '8.2 使用Rust进行测试', link: '/swaybook/testing/testing-with-rust' },
          ]
        },
        {
          text: '9.  调试 ',
          collapsed: false,
          link: '/swaybook/debugging/',
          items: [
            { text: '9.1 使用命令行进行调试', link: '/swaybook/debugging/debugging_with_cli' },
            { text: '9.2 使用集成开发环境进行调试', link: '/swaybook/debugging/debugging_with_ide' },
          ]
        },
        {
          text: '10. 应用程序前端',
          collapsed: false,
          link: '/swaybook/frontend/',
          items: [
            { text: '10.1 TypeScript SDK', link: '/swaybook/frontend/typescript_sdk' },
          ]
        },
        {
          text: '11. Sway LSP ',
          collapsed: false,
          link: '/swaybook/lsp/',
          items: [
            { text: '11.1 安装', link: '/swaybook/lsp/installation' },
            { text: '11.2 特点', link: '/swaybook/lsp/features' },
            { text: '11.3 故障排除', link: '/swaybook/lsp/troubleshooting' },
          ]
        },
        {
          text: '12.  Sway 参考文献 ',
          collapsed: false,
          link: '/swaybook/reference/',
          items: [
            {text: '12.1 编译器内部函数', link: '/swaybook/reference/compiler_intrinsics'},
            {text: '12.2 属性', link: '/swaybook/reference/attributes'},
            {text: '12.3 风格指南', link: '/swaybook/reference/style_guide'},
            {text: '12.4 已知问题和解决方法', link: '/swaybook/reference/known_issues_and_workarounds'},
            {text: '12.5 与Solidity的区别', link: '/swaybook/reference/solidity_differences'},
            {text: '12.6 与 Rust 的区别', link: '/swaybook/reference/rust_differences'},
            {text: '12.7 为 Sway 做贡献', link: '/swaybook/reference/contributing_to_sway'},
            {text: '12.8 关键字', link: '/swaybook/reference/keywords'},
          ]
        },
        {
          text: '13. Forc参考文献',
          collapsed: false,
          link: '/swaybook/forc/',
          items: [
            {text: '13.1 清单参考', link: '/swaybook/forc/manifest_reference'},
            {text: '13.2 工作区', link: '/swaybook/forc/workspaces'},
            {text: '13.3 依赖项', link: '/swaybook/forc/dependencies'},
            {
              text: '13.4 命令',
              collapsed: false,
              link: '/swaybook/forc/commands/',
              items: [
                {text: '13.4.1 forc addr 2 line', link: '/swaybook/forc/commands/forc_addr2line'},
                {text: '13.4.2 强制构建', link: '/swaybook/forc/commands/forc_build'},
                {text: '13.4.3 强制检查', link: '/swaybook/forc/commands/forc_check'},
                {text: '13.4.4 强制清理', link: '/swaybook/forc/commands/forc_clean'},
                {text: '13.4.5 forc 补全', link: '/swaybook/forc/commands/forc_completions'},
                {text: '13.4.6 forc 合约编号', link: '/swaybook/forc/commands/forc_contract-id'},
                {text: '13.4.7 强制初始化', link: '/swaybook/forc/commands/forc_init'},
                {text: '13.4.8 forc new', link: '/swaybook/forc/commands/forc_new'},
                {text: '13.4.9 forc 解析字节码', link: '/swaybook/forc/commands/forc_parse-bytecode'},
                {text: '13.4.10 forc 插件', link: '/swaybook/forc/commands/forc_plugins'},
                {text: '13.4.11 forc 谓词根', link: '/swaybook/forc/commands/forc_predicate-root'},
                {text: '13.4.12 forc 测试', link: '/swaybook/forc/commands/forc_test'},
                {text: '13.4.13 强制更新', link: '/swaybook/forc/commands/forc_update'},
                {text: '13.4.14 forc 模板 ', link: '/swaybook/forc/commands/forc_template'},
              ]
            },
            {
              text: '13.5 插件',
              collapsed: false,
              link: '/swaybook/forc/plugins/',
              items: [
                {
                  text: '13.5.1 forc 客户端',
                  collapsed: false,
                  link: '/swaybook/forc/plugins/forc_client/',
                  items: [
                    {text: '13.5.1.1 强制部署', link: '/swaybook/forc/plugins/forc_client/forc_deploy'},
                    {text: '13.5.1.2 强制运行', link: '/swaybook/forc/plugins/forc_client/forc_run'},
                    {text: '13.5.1.3 强制提交', link: '/swaybook/forc/plugins/forc_client/forc_submit'},

                  ]
                },
                {text: '13.5.2 强制加密', link: '/swaybook/forc/plugins/forc_crypto'},
                {text: '13.5.3 强制调试', link: '/swaybook/forc/plugins/forc_debug'},
                {text: '13.5.4 forc文档', link: '/swaybook/forc/plugins/forc_doc'},
                {text: '13.5.5 forc探索', link: '/swaybook/forc/plugins/forc_explore'},
                {text: '13.5.6 forc 格式', link: '/swaybook/forc/plugins/forc_fmt'},
                {text: '13.5.7 forc lsp', link: '/swaybook/forc/plugins/forc_lsp'},
              ]

            },
          ]
        },
      ],
      '/typescript-sdk': [
        {
          text: 'Geting Started',
          link: '/typescript-sdk/get-start',
          collapsed: true,
          items: [
            {
              text: '概述',
              link: '/typescript-sdk/get-start/',
            },
            {
              text: '入门指南',
              link: '/typescript-sdk/get-start/getting-started',
            },
          ]
        },
        {
          text: '创建一个 Fuel dApp',
          link: '/typescript-sdk/guide/creating-a-fuel-dapp/',
          collapsed: true,
          items: [
            {
              text: '命令行参数',
              link: '/typescript-sdk/guide/creating-a-fuel-dapp/options',
            },
            {
              text: '部署测试网',
              link: '/typescript-sdk/guide/creating-a-fuel-dapp/deploying-a-dapp-to-testnet',
            },
          ],
        },
        {
          text: 'Fuels 脚手架',
          link: '/typescript-sdk/guide/fuels-cli/',
          collapsed: true,
          items: [
            {
              text: 'ABI 类型生成器',
              link: '/typescript-sdk/guide/fuels-cli/abi-typegen',
            },
            {
              text: '内置二进制文件',
              link: '/typescript-sdk/guide/fuels-cli/binaries',
            },
            {
              text: '命令',
              link: '/typescript-sdk/guide/fuels-cli/commands',
            },
            {
              text: '配置文件',
              link: '/typescript-sdk/guide/fuels-cli/config-file',
            },
            {
              text: '生成类型',
              link: '/typescript-sdk/guide/fuels-cli/generating-types',
            },
            {
              text: '使用生成的类型',
              link: '/typescript-sdk/guide/fuels-cli/using-generated-types',
            },
          ],
        },
        {
          text: 'Provider',
          link: '/typescript-sdk/guide/provider/',
          collapsed: true,
          items: [
            {
              text: 'Provider选项',
              link: '/typescript-sdk/guide/provider/provider-options',
            },
            {
              text: '查询链',
              link: '/typescript-sdk/guide/provider/querying-the-chain',
            },
          ],
        },
        {
          text: '钱包',
          link: '/typescript-sdk/guide/wallets/',
          collapsed: true,
          items: [
            {
              text: '创建钱包',
              link: '/typescript-sdk/guide/wallets/instantiating-wallets',
            },
            {
              text: '私钥',
              link: '/typescript-sdk/guide/wallets/private-keys',
            },
            {
              text: '助记词钱包',
              link: '/typescript-sdk/guide/wallets/mnemonic-wallet',
            },
            {
              text: '加密和解密',
              link: '/typescript-sdk/guide/wallets/encrypting-and-decrypting',
            },
            {
              text: '查询余额',
              link: '/typescript-sdk/guide/wallets/checking-balances',
            },
            {
              text: '钱包转账',
              link: '/typescript-sdk/guide/wallets/wallet-transferring',
            },
            {
              text: '签名',
              link: '/typescript-sdk/guide/wallets/signing',
            },
            {
              text: '连接器',
              link: '/typescript-sdk/guide/wallets/connectors',
            },
            {
              text: '钱包管理器',
              link: '/typescript-sdk/guide/wallets/wallet-manager',
            },
            {
              text: '锁定和解锁',
              link: '/typescript-sdk/guide/wallets/locking-and-unlocking',
            },
            {
              text: '测试钱包',
              link: '/typescript-sdk/guide/wallets/test-wallets',
            },
          ],
        },
        {
          text: '合约',
          link: '/typescript-sdk/guide/contracts/',
          collapsed: true,
          items: [
            {
              text: '方法',
              link: '/typescript-sdk/guide/contracts/methods',
            },
            {
              text: '调用参数',
              link: '/typescript-sdk/guide/contracts/call-parameters',
            },
            {
              text: '合约余额',
              link: '/typescript-sdk/guide/contracts/contract-balance',
            },
            {
              text: '费用估算',
              link: '/typescript-sdk/guide/contracts/cost-estimation',
            },
            {
              text: '依赖性估计',
              link: '/typescript-sdk/guide/contracts/dependency-estimation',
            },
            {
              text: '变量输出',
              link: '/typescript-sdk/guide/contracts/variable-outputs',
            },
            {
              text: '日志',
              link: '/typescript-sdk/guide/contracts/logs',
            },
            {
              text: '合约间调用',
              link: '/typescript-sdk/guide/contracts/inter-contract-calls',
            },
            {
              text: '多合约调用',
              link: '/typescript-sdk/guide/contracts/multi-contract-calls',
            },
            {
              text: '使用不同的钱包',
              link: '/typescript-sdk/guide/contracts/using-different-wallets',
            },
            {
              text: '转移资产',
              link: '/typescript-sdk/guide/contracts/transferring-assets',
            },
            {
              text: '部署合约',
              link: '/typescript-sdk/guide/contracts/deploying-contracts',
            },
            {
              text: '存储槽',
              link: '/typescript-sdk/guide/contracts/storage-slots',
            },
            {
              text: '可配置常量',
              link: '/typescript-sdk/guide/contracts/configurable-constants',
            },
            {
              text: 'Managing Deployed Contracts',
              link: '/typescript-sdk/guide/contracts/managing-deployed-contracts',
            },
            {
              text: 'Understanding the FuelVM Binary File',
              link: '/typescript-sdk/guide/contracts/understanding-the-fuelvm-binary-file',
            },
          ],
        },
        {
          text: 'Scripts',
          link: '/typescript-sdk/guide/scripts/',
          collapsed: true,
          items: [
            {
              text: 'Instantiating A Script',
              link: '/typescript-sdk/guide/scripts/instantiating-a-script',
            },
            {
              text: 'Configurable Constants',
              link: '/typescript-sdk/guide/scripts/configurable-constants',
            },
            {
              text: 'Running scripts',
              link: '/typescript-sdk/guide/scripts/running-scripts',
            },
            {
              text: 'Custom script Call',
              link: '/typescript-sdk/guide/scripts/custom-script-call',
            },
          ],
        },
        {
          text: 'Predicates',
          link: '/typescript-sdk/guide/predicates/',
          collapsed: true,
          items: [
            {
              text: 'Instantiating A Predicate',
              link: '/typescript-sdk/guide/predicates/instantiating-a-predicate',
            },
            {
              text: 'Configurable Constants',
              link: '/typescript-sdk/guide/predicates/configurable-constants',
            },
            {
              text: 'Send And Spend Funds From Predicates',
              link: '/typescript-sdk/guide/predicates/send-and-spend-funds-from-predicates',
            },
          ],
        },
        {
          text: 'Transactions',
          link: '/typescript-sdk/guide/transactions/',
          collapsed: true,
          items: [
            {
              text: 'Transaction Request',
              link: '/typescript-sdk/guide/transactions/transaction-request',
            },
            {
              text: 'Transaction Response',
              link: '/typescript-sdk/guide/transactions/transaction-response',
            },
            {
              text: 'Transaction Parameters',
              link: '/typescript-sdk/guide/transactions/transaction-parameters',
            },
            {
              text: 'Transaction Policies',
              link: '/typescript-sdk/guide/transactions/transaction-policies',
            },
          ],
        },
        {
          text: 'Utilities',
          link: '/typescript-sdk/guide/utilities/',
          collapsed: true,
          items: [
            {
              text: 'Date conversion',
              link: '/typescript-sdk/guide/utilities/date-conversion',
            },
            {
              text: 'Address conversion',
              link: '/typescript-sdk/guide/utilities/address-conversion',
            },
            {
              text: 'Unit conversion',
              link: '/typescript-sdk/guide/utilities/unit-conversion',
            },
          ],
        },
        {
          text: 'Cookbook',
          link: '/typescript-sdk/guide/cookbook/',
          collapsed: true,
          items: [
            {
              text: 'Transferring Assets',
              link: '/typescript-sdk/guide/cookbook/transferring-assets',
            },
            {
              text: 'Deposit And Withdraw',
              link: '/typescript-sdk/guide/cookbook/deposit-and-withdraw',
            },
            {
              text: 'Wallet SDK and React Hooks',
              link: '/typescript-sdk/guide/cookbook/wallet-sdk-and-react-hooks',
            },
            {
              text: 'Custom Transactions',
              link: '/typescript-sdk/guide/cookbook/custom-transactions',
            },
            {
              text: 'Custom Transactions from Contract Calls',
              link: '/typescript-sdk/guide/cookbook/custom-transactions-from-contract-calls',
            },
            {
              text: 'Transactions with Multiple Signers',
              link: '/typescript-sdk/guide/cookbook/transactions-with-multiple-signers',
            },
            {
              text: 'GraphQL Integration',
              link: '/typescript-sdk/guide/cookbook/graphql-integration',
            },
          ],
        },
        {
          text: 'Testing',
          link: '/typescript-sdk/guide/testing/',
          collapsed: true,
          items: [
            {
              text: 'Testing in TS',
              link: '/typescript-sdk/guide/testing/testing-in-ts',
            },
            {
              text: 'Setting Up a Custom Chain',
              link: '/typescript-sdk/guide/testing/setting-up-a-custom-chain',
            },
            {
              text: 'Tweaking the Blockchain',
              link: '/typescript-sdk/guide/testing/tweaking-the-blockchain',
            },
          ],
        },
        {
          text: 'Types',
          link: '/typescript-sdk/guide/types/',
          collapsed: true,
          items: [
            {
              text: 'Address',
              link: '/typescript-sdk/guide/types/address',
            },
            {
              text: 'Arrays',
              link: '/typescript-sdk/guide/types/arrays',
            },
            {
              text: 'Asset Id',
              link: '/typescript-sdk/guide/types/asset-id',
            },
            {
              text: 'Bech32',
              link: '/typescript-sdk/guide/types/bech32',
            },
            {
              text: 'Bits256',
              link: '/typescript-sdk/guide/types/bits256',
            },
            {
              text: 'Bits512',
              link: '/typescript-sdk/guide/types/bits512',
            },
            {
              text: 'Bytes',
              link: '/typescript-sdk/guide/types/bytes',
            },
            {
              text: 'Bytes32',
              link: '/typescript-sdk/guide/types/bytes32',
            },
            {
              text: 'Enums',
              link: '/typescript-sdk/guide/types/enums',
            },
            {
              text: 'Evm Address',
              link: '/typescript-sdk/guide/types/evm-address',
            },
            {
              text: 'Native Parameters',
              link: '/typescript-sdk/guide/types/native-parameters',
            },
            {
              text: 'Numbers',
              link: '/typescript-sdk/guide/types/numbers',
            },
            {
              text: 'Options',
              link: '/typescript-sdk/guide/types/options',
            },
            {
              text: 'Raw Slice',
              link: '/typescript-sdk/guide/types/raw-slice',
            },
            {
              text: 'Std String',
              link: '/typescript-sdk/guide/types/std-string',
            },
            {
              text: 'String',
              link: '/typescript-sdk/guide/types/string',
            },
            {
              text: 'Structs',
              link: '/typescript-sdk/guide/types/structs',
            },
            {
              text: 'Tuples',
              link: '/typescript-sdk/guide/types/tuples',
            },
            {
              text: 'Vectors',
              link: '/typescript-sdk/guide/types/vectors',
            },
          ],
        },
        {
          text: 'Errors',
          link: '/typescript-sdk/guide/errors/',
          collapsed: true,
          items: [
            {
              text: 'Error Codes',
              link: '/typescript-sdk/guide/errors/error-codes',
            },
          ],
        },
      ],
      "/sway-example": [
        {
          text: 'Solidity 备忘录',
          collapsed: false,
          link: '/sway-example/cheatsheet'
        },
        {
          text: '基础',
          collapsed: true,
          items: [
            { text: '你好，Sway', link: '/sway-example/basic/hello-sway' },
            { text: '导入', link: '/sway-example/basic/imports' },
            { text: '错误处理', link: '/sway-example/basic/error-handling' },
            { text: '账户类型', link: '/sway-example/basic/account-types' },
            { text: '初始化', link: '/sway-example/basic/initialization' },
            { text: '所有权', link: '/sway-example/basic/ownership' },
            { text: '事件', link: '/sway-example/basic/events' },
            { text: '代币', link: '/sway-example/basic/tokens' },
            { text: '调用其他合约', link: '/sway-example/basic/contract-calls' },
            { text: '变量', link: '/sway-example/basic/variables' },
            { text: '原始数据类型', link: '/sway-example/basic/primitive-types' },
            { text: '复合类型', link: '/sway-example/basic/compound-types' },
            { text: '区块链类型', link: '/sway-example/basic/blockchain-types' },
            { text: '函数', link: '/sway-example/basic/functions' },
            { text: '结构体', link: '/sway-example/basic/structs' },
            { text: '元组', link: '/sway-example/basic/tuples' },
            { text: '枚举', link: '/sway-example/basic/enums' },
            { text: '常量', link: '/sway-example/basic/constants' },
            { text: '可配置常量', link: '/sway-example/basic/configurable-constants' },
            { text: '选项', link: '/sway-example/basic/options' },
            { text: '结果', link: '/sway-example/basic/results' },
            { text: 'if语句', link: '/sway-example/basic/control-flow-if' },
            { text: 'match语句', link: '/sway-example/basic/control-flow-match' },
            { text: 'While循环', link: '/sway-example/basic/control-flow-while-loop' },
            { text: '日志记录', link: '/sway-example/basic/logging' },
            { text: '存储映射', link: '/sway-example/basic/storage-map' },
            { text: '向量', link: '/sway-example/basic/vector' },
            { text: '基础资产', link: '/sway-example/basic/base-asset' },

          ]
        },
        {
          text: '应用',
          collapsed: true,
          items: [
            { text: '拥有权和msg_sender示例', link: '/sway-example/apps/ownership' },
            { text: '钱包', link: '/sway-example/apps/wallet' },
          ]
        },
        {
          text: '去中心化金融',
          collapsed: true,
          items: [
            { text: '闪电贷', link: '/sway-example/defi/flashloans' },
            { text: 'Staking Contracts', link: '/sway-example/defi/staking-contract' },

          ]
        },


      ],
      "/sway-applications" : [
        {
          text: '构建市场dApp',
          link: '/sway-applications/market/',
          collapsed: false,
          items: [
            { text: '简介', link: '/sway-applications/market/index.md', },
            { text: '基础条件', link: '/sway-applications/market/prerequisites' },
            { text: '项目导入', link: '/sway-applications/market/imports' },
            { text: '定义商品结构', link: '/sway-applications/market/structs' },
            { text: '定义存储块', link: '/sway-applications/market/storage' },
            { text: '定义错误处理', link: '/sway-applications/market/errors' },
            { text: '定义合约函数', link: '/sway-applications/market/functions' },
            { text: '合约检查站', link: '/sway-applications/market/checkpoint' },
            { text: '合约测试', link: '/sway-applications/market/test' },
            { text: '构建前端', link: '/sway-applications/market/typescript_frontend' },
          ]
        },
      ],
      "/fuel-book" : [
        {
          text: 'Fuel Book',
          link: '/fuel-book/about',
          collapsed: false,
          items: [
            { text: '关于Fuel', link: '/fuel-book/about/index.md', },
            {
              text: '为什么要使用Fuel',
              link: '/fuel-book/why-fuel/index.md',
              items: [
                {text: '开始', link: '/fuel-book/why-fuel/beginnings'},
                {text: '问题', link: '/fuel-book/why-fuel/the-problem'},
                {text: 'Fuel怎样解决问题', link: '/fuel-book/why-fuel/the-fuel-way'},
                {text: '所以，什么是Fuel', link: '/fuel-book/why-fuel/what-is-fuel'},
                {text: '在Fuel上开始构建 - 快速开始', link: '/fuel-book/why-fuel/building-on-fuel'},
              ]
            },
            {
              text: 'Fuel的架构',
              link: '/fuel-book/the-architecture/index.md',
              items: [
                {text: '关于FuelVM', link: '/fuel-book/the-architecture/the-fuelVM'},
                {text: 'Fuel网络上的交易', link: '/fuel-book/the-architecture/transactions-on-fuel'},
                {text: 'Fuel的区块', link: '/fuel-book/the-architecture/fuel-blocks'},
                {text: 'Fuel的区块构建', link: '/fuel-book/the-architecture/block-building-in-fuel'},
                {text: 'Fuel与以太坊', link: '/fuel-book/the-architecture/fuel-and-ethereum'},
                {text: 'Fuel的安全', link: '/fuel-book/the-architecture/security-on-fuel'},
              ]
            },
            {
              text: 'Fuel的未来',
              link: '/fuel-book/fuel\'s-future/index.md',
              items: [
                {text: '链接各个L2和各个L3的网络', link: '/fuel-book/fuel\'s-future/network-of-interconnection'},
                {text: '去中心化的区块构建', link: '/fuel-book/fuel\'s-future/decentralized-block-building'},
                {text: 'SNAP快速最终性的小工具', link: '/fuel-book/fuel\'s-future/SNAP-fast-finality-gadget'},
                {text: '状态重现技术', link: '/fuel-book/fuel\'s-future/state-rehydration'},
                {text: '数据流', link: '/fuel-book/fuel\'s-future/data-streaming'},
              ]
            },
            { text: '总结', link: '/fuel-book/conclusion/index.md', },
            { text: '术语表', link: '/fuel-book/glossary/index.md', },
          ]
        },

      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fuelchina/webdoc' },
      { icon: 'twitter', link: 'https://x.com/fuelchina' },
      {
        icon: {
          svg: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>'
        },
        link: 'https://medium.com/@oteguiismael874',
      }
    ]
  }
})


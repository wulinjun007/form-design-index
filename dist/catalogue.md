# 全球设计规范、设计系统与开源项目精选 50

核对日期：2026-10-02。

这是按设计师学习、建立规范和实际产品应用的参考价值整理的推荐清单，不是全球统一排名，也不是 GitHub Star 排行。筛选重点：规范完整度、组件与交互覆盖、设计到代码的衔接、无障碍、公开资料及代码可用性。前 10 项建议优先读，其余按场景分组，组间序号不表示质量差距。

“最值得参考”是本次基于官方文档作出的用途判断。项目名称链接指向官网或官方文档，源码列指向对应实现；有源码不代表所有品牌资产或产品功能都可自由使用。维护与归档备注仅指列出的实现仓库。

先看这 10 个，可以建立比较完整的设计系统认知。

| # | 项目与官网 | 最值得参考 | 源码与状态 |
|---|---|---|---|
| 1 | [Carbon｜IBM](https://carbondesignsystem.com/) | 企业级规范结构、组件行为、设计变量、数据可视化 | [GitHub](https://github.com/carbon-design-system/carbon) · 开源 |
| 2 | [Material Design 3｜Google](https://m3.material.io/) | 色彩体系、交互状态、动效、布局与组件规范 | [Material Web](https://github.com/material-components/material-web) · 开源 Web 实现已进入维护模式 |
| 3 | [Fluent 2｜Microsoft](https://fluent2.microsoft.design/) | 多平台一致性、基础样式、组件与无障碍 | [Fluent UI](https://github.com/microsoft/fluentui) · 开源 Web 实现 |
| 4 | [Spectrum｜Adobe](https://spectrum.adobe.com/) | 专业工具界面、组件状态、主题与可访问性 | [React Spectrum](https://github.com/adobe/react-spectrum) · 开源 |
| 5 | [Ant Design｜蚂蚁集团](https://ant.design/) | 中文设计语言、企业后台、复杂表单与表格 | [GitHub](https://github.com/ant-design/ant-design) · 开源 |
| 6 | [Atlassian Design System](https://atlassian.design/) | 协作软件、语义化设计变量、内容与交互模式 | [Bitbucket 官方镜像](https://bitbucket.org/atlassian/atlassian-frontend-mirror/) · 各包及设计资产许可需区分 |
| 7 | [Human Interface Guidelines｜Apple](https://developer.apple.com/design/human-interface-guidelines/) | 平台交互原则、布局、输入方式与体验一致性 | 公开设计规范；不提供与 HIG 对应的完整开源组件库 |
| 8 | [GOV.UK Design System｜英国](https://design-system.service.gov.uk/) | 表单流程、错误提示、研究依据、可访问性 | [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) · 开源 |
| 9 | [USWDS｜美国](https://designsystem.digital.gov/) | 公共服务网站、设计原则、组件与无障碍 | [GitHub](https://github.com/uswds/uswds) · 公开源码 |
| 10 | [Lightning Design System｜Salesforce](https://www.lightningdesignsystem.com/) | 企业 CRM、复杂业务界面、组件规范 | [旧源码仓库](https://github.com/salesforce-ux/design-system) · 已归档；当前规范看官网 |

下面 10 个更适合研究真实企业产品如何组织复杂界面。

| # | 项目与官网 | 最值得参考 | 源码与状态 |
|---|---|---|---|
| 11 | [Primer｜GitHub](https://primer.style/) | 开发者工具、产品与品牌界面、设计变量 | [Primer React](https://github.com/primer/react) · 开源 |
| 12 | [Polaris｜Shopify](https://shopify.dev/docs/api/polaris) | 商家后台、平台内多场景一致性、Web Components | [旧 React 仓库](https://github.com/Shopify/polaris-react-archive) · 已归档；源码使用有专门许可 |
| 13 | [Cloudscape｜AWS](https://cloudscape.design/) | 云控制台、资源管理、数据密集型流程、完整页面示例 | [GitHub](https://github.com/cloudscape-design/components) · 开源 |
| 14 | [Pajamas｜GitLab](https://design.gitlab.com/) | 研发协作、内容规范、组件与产品模式 | [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui) · 源码托管在 GitLab |
| 15 | [Elastic UI / EUI](https://eui.elastic.co/) | 搜索分析、表格、筛选、数据工作台 | [GitHub](https://github.com/elastic/eui) · 源码可见；ELv2 / SSPL |
| 16 | [PatternFly｜Red Hat](https://www.patternfly.org/) | 运维管理、复杂表格、向导、状态与批量操作 | [GitHub](https://github.com/patternfly/patternfly) · 开源 |
| 17 | [Base Web｜Uber](https://baseweb.design/) | React 组件组合、设计语言到组件实现 | [GitHub](https://github.com/uber/baseweb) · 开源 |
| 18 | [Gestalt｜Pinterest](https://gestalt.pinterest.systems/) | 内容产品、视觉一致性、React 组件规范 | [GitHub](https://github.com/pinterest/gestalt) · 开源 |
| 19 | [Garden｜Zendesk](https://garden.zendesk.com/) | 客服工作台、内容策略、组件组合模式 | [GitHub](https://github.com/zendeskgarden/react-components) · 开源 |
| 20 | [Paste｜Twilio](https://paste-dsys.com/) | 可访问组件、设计变量与产品一致性 | [GitHub](https://github.com/twilio-labs/paste) · 开源 |

这 15 个补充行业与地区视角，包含欧洲、北美、亚洲和大洋洲的案例。

| # | 项目与官网 | 最值得参考 | 源码与状态 |
|---|---|---|---|
| 21 | [Canvas｜Workday](https://canvas.workday.com/) | 企业管理软件、组件体系、设计变量 | [Canvas Kit](https://github.com/Workday/canvas-kit) · 开源；另有[组件演示](https://workday.github.io/canvas-kit/) |
| 22 | [Orbit｜Kiwi.com](https://orbit.kiwi/) | 旅行预订场景、信息层级、React 组件 | [GitHub](https://github.com/kiwicom/orbit) · 开源 |
| 23 | [Clarity](https://clarity.design/) | 企业管理界面、Angular 组件与无障碍 | [Clarity Angular](https://github.com/vmware-clarity/ng-clarity) · 开源 |
| 24 | [OpenUI5｜SAP](https://openui5.org/) | 企业业务应用、响应式控件与工程实现 | [GitHub](https://github.com/UI5/openui5) · 开源 UI 框架 |
| 25 | [Porsche Design System｜德国](https://designsystem.porsche.com/) | 汽车品牌网站、品牌一致性、跨框架组件与设计变量 | [GitHub](https://github.com/porsche-design-system/porsche-design-system) · 代码与品牌资产分别看许可 |
| 26 | [NHS Design System｜英国](https://service-manual.nhs.uk/design-system) | 医疗服务流程、易读内容、表单与无障碍 | [GitHub](https://github.com/nhsuk/nhsuk-frontend) · 开源 |
| 27 | [GCWeb / Canada.ca｜加拿大](https://wet-boew.github.io/GCWeb/) | 政府信息架构、双语网站、公共服务模板 | [GitHub](https://github.com/wet-boew/GCWeb) · 公开源码 |
| 28 | [NSW Design System｜澳大利亚](https://designsystem.nsw.gov.au/) | 政府品牌、响应式布局、组件和页面模板 | [GitHub](https://github.com/NSWGTP/nsw-design-system) · 开源 |
| 29 | [Helsinki Design System｜芬兰](https://hds.hel.fi/) | 城市公共服务、组件、原则与模板 | [GitHub](https://github.com/City-of-Helsinki/helsinki-design-system) · 开源 |
| 30 | [Aksel｜挪威 NAV](https://aksel.nav.no/) | 政务申请、复杂表单、设计变量与研究实践 | [GitHub](https://github.com/navikt/aksel) · 开源 |
| 31 | [NL Design System｜荷兰](https://nldesignsystem.nl/) | 多机构共同维护、主题复用、组件与研究共享 | [Utrecht 实现](https://github.com/nl-design-system/utrecht) · 开源生态中的一个实现 |
| 32 | [Singapore Government Design System｜新加坡](https://www.designsystem.tech.gov.sg/) | 政府网站视觉语言、组件与统一体验 | [GitHub](https://github.com/GovTechSG/sgds) · 公开源码 |
| 33 | [DSFR｜法国](https://www.systeme-de-design.gouv.fr/) | 国家级设计规范、组件与品牌治理 | [GitHub](https://github.com/GouvernementFR/dsfr) · 公开源码；受官方使用条款约束 |
| 34 | [Eufemia｜挪威 DNB](https://eufemia.dnb.no/) | 银行产品、表单、基础样式与品牌一致性 | [GitHub](https://github.com/dnbexperience/eufemia) · 代码与品牌资产分别看许可 |
| 35 | [Calcite｜Esri](https://developers.arcgis.com/calcite-design-system/) | 地图与专业工具界面、Web Components、设计变量 | [GitHub](https://github.com/Esri/calcite-design-system) · 源码可见，适用 Esri 许可 |

这 12 个更适合快速做出可运行的产品，其中一部分侧重组件实现，可结合前面的规范型系统学习。

| # | 项目与官网 | 最值得参考 | 源码与状态 |
|---|---|---|---|
| 36 | [TDesign｜腾讯](https://tdesign.tencent.com/) | 中文设计体系、多技术栈、企业产品组件 | [React 实现](https://github.com/Tencent/tdesign-react) · 开源 |
| 37 | [Arco Design｜字节跳动](https://arco.design/) | 企业级设计开发协作、组件与风格配置 | [GitHub](https://github.com/arco-design/arco-design) · 开源 |
| 38 | [Semi Design｜抖音](https://semi.design/) | 设计变量、主题定制、设计稿到代码 | [GitHub](https://github.com/DouyinFE/semi-design) · 开源 |
| 39 | [Element Plus](https://element-plus.org/) | Vue 3 后台、表单、表格与业务组件 | [GitHub](https://github.com/element-plus/element-plus) · 开源 |
| 40 | [Naive UI](https://www.naiveui.com/) | Vue 3 组件、主题定制、TypeScript 实现 | [GitHub](https://github.com/tusen-ai/naive-ui) · 开源 |
| 41 | [Material UI / MUI](https://mui.com/material-ui/) | Material 风格 React 组件、主题与组件定制 | [GitHub](https://github.com/mui/material-ui) · 核心库开源；部分扩展产品收费 |
| 42 | [Chakra UI](https://chakra-ui.com/) | 语义化设计变量、组件变体、自建设计系统 | [GitHub](https://github.com/chakra-ui/chakra-ui) · 核心库开源 |
| 43 | [Mantine](https://mantine.dev/) | 功能较完整的 React 组件、表单与应用搭建 | [GitHub](https://github.com/mantinedev/mantine) · 开源 |
| 44 | [shadcn/ui](https://ui.shadcn.com/) | 将组件源码纳入项目、定制自己的组件库 | [GitHub](https://github.com/shadcn-ui/ui) · 开源 |
| 45 | [Radix UI](https://www.radix-ui.com/) | 无预设样式的交互基础、焦点管理与可访问性 | [Primitives](https://github.com/radix-ui/primitives) · 开源 |
| 46 | [Bootstrap](https://getbootstrap.com/) | 响应式栅格、基础组件、快速网站搭建 | [GitHub](https://github.com/twbs/bootstrap) · 开源 |
| 47 | [Vuetify](https://vuetifyjs.com/) | Vue 组件体系、Material 风格产品搭建 | [GitHub](https://github.com/vuetifyjs/vuetify) · 核心库开源 |

最后 3 个是搭建设计系统时值得一起掌握的规范与工具。

| # | 项目与官网 | 最值得参考 | 源码与状态 |
|---|---|---|---|
| 48 | [Design Tokens Community Group](https://www.designtokens.org/) | 设计变量的通用数据格式、跨工具交换 | [GitHub](https://github.com/design-tokens/community-group) · 公开规范 |
| 49 | [Storybook](https://storybook.js.org/) | 组件文档、状态展示、隔离开发与测试 | [GitHub](https://github.com/storybookjs/storybook) · 开源工具 |
| 50 | [Style Dictionary](https://styledictionary.com/) | 将同一套设计变量转换成不同平台所需的样式 | [GitHub](https://github.com/style-dictionary/style-dictionary) · 开源工具 |

需要特别留意的当前状态：

- Material Design 3 规范与 Material Web 是不同层次的资源。后者 README 写明进入维护模式，不能据此推断整个 Material Design 停止维护。[Material Web 官方说明](https://github.com/material-components/material-web)
- Salesforce 列出的旧仓库于 2026-08-12 归档；Polaris 旧 React 仓库于 2026-09-11 归档。Polaris 当前官方文档提供 Web Components 路线。[Salesforce 仓库](https://github.com/salesforce-ux/design-system)、[Polaris 仓库](https://github.com/Shopify/polaris-react-archive)、[Polaris 当前文档](https://shopify.dev/docs/api/polaris)
- Apple HIG 是公开指南；EUI 和 Calcite 属于源码可见且有专门许可的资源。本清单没有将它们统一归为可自由复用的开源组件库。[EUI 官方说明](https://eui.elastic.co/)、[Calcite 仓库许可说明](https://github.com/Esri/calcite-design-system#license)
- Workday Canvas、Orbit、TDesign 的部分官网页面在本次抓取中受限或超时，已用官方仓库与组件演示补充核对。其余部分站点依赖 JavaScript；本次做的是资料入口与仓库状态核对，未逐个安装运行。

建议按目标选用：

- 学习完整设计规范：Carbon、Material 3、Fluent 2、Spectrum、Ant Design。
- 研究复杂业务与工作台：Cloudscape、PatternFly、Primer、Garden、Pajamas。
- 研究交互依据与无障碍：GOV.UK、NHS、USWDS、Aksel。
- 建立自己的组件系统：Radix 或 shadcn/ui，配合 DTCG、Style Dictionary 和 Storybook。
- 参考中文设计到代码流程：Ant Design、TDesign、Semi Design、Arco Design。


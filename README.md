# 形序 · Design Index

一个中文设计系统参考网站，收录 50 个全球设计规范、设计系统、组件框架与构建工具。

资料核对日期为 **2026-10-02**。排序是基于参考价值的编辑选择，不是官方排名或实时 GitHub 热度榜。

## 使用

- 按名称、场景、技术栈搜索，结合六类应用方向与源码状态筛选。
- 查看官方文档和对应源码；明确区分开源、公开规范、源码可见与旧仓库归档。
- 收藏保存在当前浏览器的本地存储，不需要账号；不同设备不自动同步。
- 同时比较 2–3 个项目，查看场景、技术栈、参考价值与使用边界。
- 按三条学习路线浏览，或下载完整 Markdown 清单。
- 搜索、分类、源码状态、排序和项目详情可以通过地址栏分享。

## 设计说明

视觉参考用户提供的 LightVela 设计研究，选取白色表面、极淡竖纹、深紫黑、橄榄色点缀、胶囊按钮、轻阴影与细下划线。内容组织围绕「寻找参考 → 阅读详情 → 收藏 / 对比 → 实践」展开。

页面中的图形封面是本网站原创的几何示意，不是项目官网截图或官方标识。系统名称及第三方资料的权利归各权利人。原始研究附件和其中的个人内容未包含在仓库中。

## GitHub 与开源组件

- [Radix UI Primitives](https://github.com/radix-ui/primitives)：Dialog 和 Tabs，用于键盘交互、焦点管理和项目详情。
- [Lucide](https://github.com/lucide-icons/lucide)：界面图标。
- [Fuse.js](https://github.com/krisk/Fuse)：本地关键词检索。
- [React](https://github.com/facebook/react)：界面状态。
- [Vite](https://github.com/vitejs/vite) 与 [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)：构建单文件 HTML。

具体版本记录在 `package-lock.json`。第三方许可收录在 `public/THIRD_PARTY_NOTICES.txt`，同时嵌入构建后的 HTML。

## 本地运行与构建

```sh
npm ci
npm run dev
npm run build
```

构建生成 `dist/index.html`，样式、脚本与目录数据均内联，可在浏览器中直接打开。访问外部官方文档仍需联网。构建同时生成 `docs/`，用于 GitHub Pages。

## 内容与文件

| 路径 | 用途 |
| --- | --- |
| `src/data.json` | 50 项结构化目录，是页面的数据来源 |
| `src/main.jsx` | 搜索、收藏、对比、学习路线与详情 |
| `src/style.css` | 视觉规范、响应式样式与减少动画偏好支持 |
| `public/catalogue.md` | 原始精选清单及来源说明 |
| `public/catalogue.json` | 公开数据副本 |
| `public/health.json` | 部署验收用版本信息 |
| `dist/index.html` | 可独立打开的完整 HTML |
| `docs/` | GitHub Pages 发布文件 |
| `vercel.json` | Vercel 构建配置 |

修改条目后同步更新 `public/catalogue.json`，核对日期和源码状态，并重新构建。第三方项目可能改变地址、许可与维护状态，网站保留明确的资料日期。

## 部署

GitHub Pages 从 `main` 分支的 `docs/` 发布。Vercel 构建命令为 `npm run build`，输出目录为 `dist`。

```sh
vercel link
vercel deploy --prod
```

发布后需匿名访问首页与 `health.json`，再在正式网址验证搜索和详情。平台显示 Ready 本身不构成公开访问验收。

## 验收范围

已在 Chromium 检查 320、390、768、1440 像素视口布局，验证 50 项加载、关键词与分类筛选、归档筛选、空结果、收藏刷新保留、三项对比上限、详情标签页、Escape 关闭及焦点恢复。此检查不等同于全平台兼容性或完整 WCAG 合规认证。

## 许可

本项目原创网站代码采用 MIT。此许可不延伸到链接目标中的第三方设计规范、商标与素材；使用这些资源时请阅读各项目许可。

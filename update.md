# update

## 2024-07-02

- 增加了nextui的参考配置和shadcn的参考配置
- 更新了大版本

```bash

dependencies:
- @ducanh2912/next-pwa 9.7.2
+ @ducanh2912/next-pwa 10.2.7
- @formatjs/intl-localematcher 0.2.32
+ @formatjs/intl-localematcher 0.5.4
- next 13.5.6
+ next 14.2.4
- tailwind-variants 0.1.20
+ tailwind-variants 0.2.1

devDependencies:
- @commitlint/cli 17.8.1
+ @commitlint/cli 19.3.0
- @commitlint/config-conventional 17.8.1
+ @commitlint/config-conventional 19.2.2
- @typescript-eslint/eslint-plugin 6.21.0
+ @typescript-eslint/eslint-plugin 7.15.0
- @typescript-eslint/parser 6.21.0
+ @typescript-eslint/parser 7.15.0
- conventional-changelog-cli 2.2.2
+ conventional-changelog-cli 5.0.0
- cssnano 5.1.15
+ cssnano 7.0.3
- eslint-config-next 13.5.6
+ eslint-config-next 14.2.4
- eslint-plugin-prettier 4.2.1
+ eslint-plugin-prettier 5.1.3
- husky 8.0.3
+ husky 9.0.11
- lint-staged 14.0.1
+ lint-staged 15.2.7
- postcss-import 15.1.0
+ postcss-import 16.1.0
- prettier 2.8.8
+ prettier 3.3.2
- pretty-quick 3.3.1
+ pretty-quick 4.0.0
- stylelint 14.16.1
+ stylelint 16.6.1
- stylelint-config-recommended 9.0.0
+ stylelint-config-recommended 14.0.1
- stylelint-config-standard 29.0.0
+ stylelint-config-standard 36.0.1
- stylelint-order 5.0.0
+ stylelint-order 6.0.4
```

## 2023-10-23

更新了 nextjs 版本为 13.5.6 版本，删除了部分默认的配置项

```bash
dependencies:
- @ducanh2912/next-pwa 9.5.0
+ @ducanh2912/next-pwa 9.7.2
- @prisma/client 5.2.0
+ @prisma/client 5.4.2
- ethers 6.7.1
+ ethers 6.8.0
- next 13.4.19
+ next 13.5.6
- tailwind-variants 0.1.13
+ tailwind-variants 0.1.14

devDependencies:
- @commitlint/cli 17.7.1
+ @commitlint/cli 17.8.1 (18.0.0 is available)
- @commitlint/config-conventional 17.7.0
+ @commitlint/config-conventional 17.8.1 (18.0.0 is available)
- @tailwindcss/forms 0.5.5
+ @tailwindcss/forms 0.5.6
- @tailwindcss/typography 0.5.9
+ @tailwindcss/typography 0.5.10
- @types/node 20.5.6
+ @types/node 20.8.7
- @types/nprogress 0.2.0
+ @types/nprogress 0.2.2
- @types/react 18.2.21
+ @types/react 18.2.31
- @types/react-dom 18.2.7
+ @types/react-dom 18.2.14
- @typescript-eslint/eslint-plugin 6.4.1
+ @typescript-eslint/eslint-plugin 6.8.0
- @typescript-eslint/parser 6.4.1
+ @typescript-eslint/parser 6.8.0
- autoprefixer 10.4.15
+ autoprefixer 10.4.16
- eslint 8.48.0
+ eslint 8.52.0
- eslint-config-next 13.4.19
+ eslint-config-next 13.5.6
- eslint-import-resolver-typescript 3.6.0
+ eslint-import-resolver-typescript 3.6.1
- postcss 8.4.28
+ postcss 8.4.31
- postcss-scss 4.0.7
+ postcss-scss 4.0.9
- prisma 5.2.0
+ prisma 5.4.2

```

## 2023-8-28

由于更新了 nextjs 版本，turbopack 编译产物路径发生变化。所有导致了 i18n 服务的 middleware 拦截出现变化。所以需要修改此问题

```ts
// in middleware.ts
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // delete next line
  // matcher: ['/((?!api|_next).*)']
  // 2023-8-28 update add next line
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
```

```bash
dependencies:
- @prisma/client 5.1.1
+ @prisma/client 5.2.0
- ethers 6.7.0
+ ethers 6.7.1
- next 13.4.12
+ next 13.4.19
- typescript 5.1.6
+ typescript 5.2.2

devDependencies:
- @commitlint/cli 17.6.7
+ @commitlint/cli 17.7.1
- @commitlint/config-conventional 17.6.7
+ @commitlint/config-conventional 17.7.0
- @tailwindcss/forms 0.5.4
+ @tailwindcss/forms 0.5.5
- @types/node 20.4.8
+ @types/node 20.5.6
- @types/react 18.2.18
+ @types/react 18.2.21
- @typescript-eslint/eslint-plugin 6.2.1
+ @typescript-eslint/eslint-plugin 6.4.1
- @typescript-eslint/parser 6.2.1
+ @typescript-eslint/parser 6.4.1
- autoprefixer 10.4.14
+ autoprefixer 10.4.15
- eslint 8.46.0
+ eslint 8.48.0
- eslint-config-next 13.4.12
+ eslint-config-next 13.4.19
- eslint-import-resolver-typescript 3.5.5
+ eslint-import-resolver-typescript 3.6.0
- eslint-plugin-import 2.28.0
+ eslint-plugin-import 2.28.1
- eslint-plugin-react 7.33.1
+ eslint-plugin-react 7.33.2
- lint-staged 13.2.3
+ lint-staged 14.0.1
- postcss 8.4.27
+ postcss 8.4.28
- postcss-scss 4.0.6
+ postcss-scss 4.0.7
- prisma 5.1.1
+ prisma 5.2.0
```

## 2023-8

将 API 代理外部接口迁移到了 nextjs 支持的 rewrites，详情见`next.config.js`，去除了`http-proxy-middleware`

Migrated the API proxy external interface to the rewrites supported by nextjs, see `next.config.js` for details, delete `http-proxy-middleware`

将自身的 API 编写接口迁移到了 app dir 目录下，具体可以参考最新的 nextjs 文档

Migrated its own API writing interface to the app dir directory, for details, please refer to the latest nextjs documentation

更新了依赖包

Updated dependencies

```bash
dependencies:
- @prisma/client 4.13.0
+ @prisma/client 5.1.1
- ethers 6.3.0
+ ethers 6.7.0
- next 13.4.1
+ next 13.4.12
- tailwind-variants 0.1.5
+ tailwind-variants 0.1.13
- typescript 5.0.4
+ typescript 5.1.6

devDependencies:
- @commitlint/cli 17.6.3
+ @commitlint/cli 17.6.7
- @commitlint/config-conventional 17.6.3
+ @commitlint/config-conventional 17.6.7
- @tailwindcss/forms 0.5.3
+ @tailwindcss/forms 0.5.4
- @types/node 18.16.5
+ @types/node 20.4.8
- @types/react 18.2.6
+ @types/react 18.2.18
- @types/react-dom 18.2.4
+ @types/react-dom 18.2.7
- @typescript-eslint/eslint-plugin 5.59.2
+ @typescript-eslint/eslint-plugin 6.2.1
- @typescript-eslint/parser 5.59.2
+ @typescript-eslint/parser 6.2.1
- eslint 8.40.0
+ eslint 8.46.0
- eslint-config-next 13.4.1
+ eslint-config-next 13.4.12
- eslint-config-prettier 8.8.0
+ eslint-config-prettier 9.0.0
- eslint-plugin-import 2.27.5
+ eslint-plugin-import 2.28.0
- eslint-plugin-react 7.32.2
+ eslint-plugin-react 7.33.1
- eslint-plugin-tailwindcss 3.11.0
+ eslint-plugin-tailwindcss 3.13.0
- lint-staged 13.2.2
+ lint-staged 13.2.3
- postcss 8.4.23
+ postcss 8.4.27
- prisma 4.13.0
+ prisma 5.1.1
- tailwindcss 3.3.2
+ tailwindcss 3.3.3
```

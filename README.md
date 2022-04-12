# about-me-vite-react

## 概要

- 自己紹介を目的たした静的サイトです
- 開発環境に vite を利用
- nginx の学習も含めて作成
- docker､レスポンシブデザイン､TypeScript 対応済み

  - Link
    - [mT about me](http://35.74.155.2/)

---

## 使用技術

- ## React v16.2.0
  - React Hook
  - Material UI v4.11.4
- ## Type Script v4.1.3
- ## Nginx v1.18
- ## docker v20.10.12
  - docker-compose v2.2.3
- ## AWS
  - EC2
  - VPC

---

## インフラ構成

- 開発環境

  - app container

    - node:16-alpine

  - web container

    - nginx:1.18-alpine

- 本番環境

  - app container
    - node:16-alpine

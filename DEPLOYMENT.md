# 部署到 Vercel 的详细步骤

## 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com 并登录您的账号
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库名称，例如：`beijing-attractions-map`
4. 选择 "Public" 或 "Private"
5. 点击 "Create repository"

## 步骤 2: 上传项目到 GitHub

### 方法 A: 使用 Git 命令（推荐）

在项目目录中打开终端，依次执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/beijing-attractions-map.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 方法 B: 通过 GitHub 网页上传

1. 在新建的 GitHub 仓库页面，点击 "uploading an existing file"
2. 将项目文件夹中的所有文件拖拽到上传区域
3. 在底部输入提交信息：`Initial commit`
4. 点击 "Commit changes"

## 步骤 3: 部署到 Vercel

1. 访问 https://vercel.com 并使用 GitHub 账号登录
2. 点击 "Add New..." → "Project"
3. 在 "Import Git Repository" 中找到您的 `beijing-attractions-map` 仓库
4. 点击 "Import"

## 步骤 4: 配置项目

Vercel 会自动检测到这是一个 Vite + React 项目，直接点击：

1. **Framework Preset**: 确认是 "Vite"
2. **Root Directory**: 确认是 `./` （默认）
3. **Build Command**: 确认是 `npm run build`
4. **Output Directory**: 确认是 `dist`

点击 **"Deploy"** 按钮

## 步骤 5: 等待部署完成

部署通常需要 1-2 分钟，完成后您会看到：

- ✅ **Deployed** 状态
- 🌐 **Domain**: 您的网站地址，例如 `https://beijing-attractions-map.vercel.app`

## 步骤 6: 访问网站

点击 Vercel 提供的域名链接，即可在手机和任何设备上访问您的网站！

---

## 自定义域名（可选）

如果您想使用自己的域名：

1. 在 Vercel 项目设置中，点击 "Domains"
2. 添加您的域名
3. 按照提示配置 DNS 记录

---

## 项目文件说明

- `dist/` - 构建后的生产文件（已生成）
- `src/` - 源代码
- `package.json` - 项目配置
- `vite.config.js` - Vite 配置

---

## 注意事项

1. **免费额度**: Vercel 免费版提供每月 100GB 流量，足够个人使用
2. **自动部署**: 每次推送代码到 GitHub，Vercel 会自动重新部署
3. **HTTPS**: Vercel 自动提供 HTTPS 证书
4. **全球 CDN**: Vercel 会自动将网站分发到全球节点

---

## 后续更新

如果需要更新网站：

1. 修改代码
2. 运行 `git add .` 和 `git commit -m "更新说明"`
3. 运行 `git push`
4. Vercel 会自动部署更新

---

如有问题，请访问：https://vercel.com/docs

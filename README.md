# 北京热门景点地图导航应用

一个基于 React 和 OpenStreetMap 的北京热门景点地图导航应用。

## 功能特点

- 🗺️ **交互式地图** - 使用 OpenStreetMap 展示北京热门景点位置
- 🔍 **景点搜索** - 支持按名称和描述搜索景点
- 📂 **分类筛选** - 按景点类型（历史古迹、皇家园林等）筛选
- 📍 **景点详情** - 查看景点评分、开放时间、票价等信息
- 🧭 **一键导航** - 点击导航按钮跳转到 OpenStreetMap 导航

## 包含的景点

1. 故宫博物院
2. 天安门广场
3. 长城-八达岭
4. 颐和园
5. 天坛公园
6. 北海公园
7. 南锣鼓巷
8. 798艺术区
9. 鸟巢-国家体育场
10. 水立方-国家游泳中心
11. 什刹海
12. 雍和宫

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

应用将在 http://localhost:3000 打开。

### 3. 构建生产版本

```bash
npm run build
```

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **地图服务**: OpenStreetMap + Leaflet + React-Leaflet
- **样式**: CSS3

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── Map.jsx          # 地图组件
│   │   ├── Map.css
│   │   ├── Sidebar.jsx      # 侧边栏组件
│   │   └── Sidebar.css
│   ├── data/
│   │   └── attractions.js   # 景点数据
│   ├── App.jsx              # 主应用组件
│   ├── App.css
│   ├── main.jsx             # 应用入口
│   └── index.css            # 全局样式
├── index.html               # HTML 模板
├── package.json
├── vite.config.js
└── README.md
```

## 使用说明

1. **浏览景点** - 左侧侧边栏显示所有景点列表
2. **搜索景点** - 在搜索框输入关键词搜索
3. **筛选分类** - 点击分类按钮按类型筛选景点
4. **查看详情** - 点击景点卡片或在地图上点击标记查看详情
5. **导航功能** - 点击"导航到此"按钮打开 OpenStreetMap 进行导航

## 优势

- ✅ 无需 API Key，开箱即用
- ✅ 使用开源地图服务，完全免费
- ✅ 快速部署，易于维护
- ✅ 响应式设计，支持移动端

## 注意事项

- 导航功能会在 OpenStreetMap 网页版中打开
- 景点数据仅供参考，具体信息请以官方为准

## License

MIT

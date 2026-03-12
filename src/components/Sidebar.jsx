import React, { useState } from 'react'
import { attractions, categories } from '../data/attractions'
import './Sidebar.css'

export default function Sidebar({ selectedAttraction, onSelectAttraction }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredAttractions = attractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attraction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '全部' || attraction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>北京热门景点</h1>
        <p>探索北京的精彩景点</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="搜索景点名称或描述..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-section">
        <h3>景点分类</h3>
        <div className="category-list">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="attractions-list">
        <h3>景点列表 ({filteredAttractions.length})</h3>
        {filteredAttractions.length === 0 ? (
          <div className="no-results">未找到匹配的景点</div>
        ) : (
          filteredAttractions.map(attraction => (
            <div
              key={attraction.id}
              className={`attraction-card ${selectedAttraction?.id === attraction.id ? 'selected' : ''}`}
              onClick={() => onSelectAttraction(attraction)}
            >
              <div className="attraction-header">
                <h4>{attraction.name}</h4>
                <span className="rating">⭐ {attraction.rating}</span>
              </div>
              <p className="attraction-description">{attraction.description}</p>
              <div className="attraction-meta">
                <span className="category-tag">{attraction.category}</span>
                <span className="time">⏰ {attraction.openTime}</span>
                <span className="ticket">🎫 {attraction.ticket}</span>
              </div>
              {attraction.bestEntrance && (
                <div className="queue-tips">
                  <p className="tip-item">🚪 {attraction.bestEntrance}</p>
                  <p className="tip-item">⏱️ {attraction.queueTip}</p>
                </div>
              )}
              <button 
                className="navigate-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNavigate(attraction)
                }}
              >
                🧭 导航 (高德地图)
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function handleNavigate(attraction) {
  const { lat, lng, name } = attraction
  // 使用高德地图进行导航
  const url = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&src=beijing-map&coordinate=wgs84&callnative=1`
  window.open(url, '_blank')
}

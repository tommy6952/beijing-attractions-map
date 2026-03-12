import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { attractions } from '../data/attractions'
import './Map.css'

// 修复 Leaflet 默认图标问题
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// 创建自定义图标
const createCustomIcon = (isSelected) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      font-size: ${isSelected ? '40px' : '32px'};
      text-align: center;
      line-height: 1;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      transform: translate(-50%, -100%);
    ">${isSelected ? '📍' : '🔴'}</div>`,
    iconSize: isSelected ? [40, 40] : [32, 32],
    iconAnchor: [isSelected ? 20 : 16, isSelected ? 40 : 32],
  })
}

// 地图控制器组件
function MapController({ selectedAttraction }) {
  const map = useMap()

  useEffect(() => {
    if (selectedAttraction) {
      map.setView([selectedAttraction.lat, selectedAttraction.lng], 15)
    }
  }, [selectedAttraction, map])

  return null
}

export default function Map({ selectedAttraction, onSelectAttraction }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[39.9163, 116.3972]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.amap.com/">高德地图</a>'
          url="http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
          subdomains={['1', '2', '3', '4']}
          maxZoom={18}
          minZoom={3}
        />
        
        <MapController selectedAttraction={selectedAttraction} />

        {attractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={[attraction.lat, attraction.lng]}
            icon={createCustomIcon(selectedAttraction?.id === attraction.id)}
            eventHandlers={{
              click: () => onSelectAttraction(attraction),
            }}
          >
            <Popup>
              <div className="popup-content">
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
                <div className="popup-meta">
                  <span>⭐ {attraction.rating}</span>
                  <span>{attraction.category}</span>
                </div>
                <p>⏰ {attraction.openTime}</p>
                <p>🎫 {attraction.ticket}</p>
                {attraction.bestEntrance && (
                  <div className="popup-tips">
                    <p>🚪 {attraction.bestEntrance}</p>
                    <p>⏱️ {attraction.queueTip}</p>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="map-legend">
        <h3>地图说明</h3>
        <p>🔴 景点标记</p>
        <p>📍 选中景点</p>
        <p>💡 点击标记查看详情</p>
      </div>
    </div>
  )
}

import "@fontsource/inter/index.css";
import "@fontsource/jetbrains-mono/index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config' // 核心：导入国际化配置
import App from './App.jsx'

// 全局错误捕获，防止静默黑屏
window.onerror = (msg, url, lineNo, columnNo, error) => {
  console.error('🔥 [Critical UI Error]:', { msg, url, lineNo, columnNo, error });
  // 如果页面还是空白，可以在此处注入一个简单的提示 UI
};

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('❌ [Critical Error]: Root element "#root" not found!');
  document.body.innerHTML = '<div style="color:white;padding:20px;font-family:sans-serif;">Fatal Error: Root container not found.</div>';
}

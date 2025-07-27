/* ========================== Udaan App - style.css ========================== */

/* Global Styles */

{ margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }


body { background: linear-gradient(135deg, #e0f7fa, #fce4ec); color: #333; padding: 20px; overflow-x: hidden; transition: background 0.4s ease; }

h1, h2 { text-align: center; margin-bottom: 20px; }

.container { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; padding: 20px; }

.button { background-color: #ffffff; border: 2px solid #03a9f4; color: #03a9f4; padding: 12px 24px; font-size: 16px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }

.button:hover { background-color: #03a9f4; color: white; transform: translateY(-2px); }

.sub-section { display: none; flex-direction: column; margin-top: 10px; padding-left: 30px; gap: 10px; }

.visible { display: flex !important; }

.floating-chatbot { position: fixed; bottom: 20px; right: 20px; background-color: #ff4081; color: white; padding: 14px; border-radius: 50%; font-size: 20px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 999; animation: bounce 2s infinite; }

/* Dark Mode */ .dark-mode { background: linear-gradient(135deg, #263238, #1e1e1e); color: #f1f1f1; }

.dark-mode .button { border-color: #ffeb3b; color: #ffeb3b; }

.dark-mode .button:hover { background-color: #ffeb3b; color: #1e1e1e; }

/* Butterfly Animation */ .butterfly { position: fixed; top: 10%; left: -100px; width: 80px; height: 80px; background: url('icons/butterfly.gif') no-repeat center/contain; animation: flyAcross 15s linear infinite; z-index: 1; }

@keyframes flyAcross { 0% { transform: translateX(0) translateY(0); } 25% { transform: translateX(25vw) translateY(-10vh); } 50% { transform: translateX(50vw) translateY(10vh); } 75% { transform: translateX(75vw) translateY(-5vh); } 100% { transform: translateX(100vw) translateY(0); } }

@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }



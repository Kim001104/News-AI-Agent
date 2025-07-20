import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('ko');
  const [result, setResult] = useState('');

  const handleTranslate = async () => {
    const res = await fetch('http://127.0.0.1:5000/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, target_lang: lang })
    });

    const data = await res.json();
    setResult(data.translated_text || data.error);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🌍 다국어 번역기</h2>
      <textarea value={text} onChange={e => setText(e.target.value)} rows="4" cols="50" />
      <br />
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="ja">일본어</option>
        <option value="es">스페인어</option>
      </select>
      <br /><br />
      <button onClick={handleTranslate}>번역하기</button>
      <h3>결과:</h3>
      <p>{result}</p>
    </div>
  );
}

export default App;


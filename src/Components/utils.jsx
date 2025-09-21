 export const highlightText = (text, words) => {
    if (!words.length) return text;
    
    let highlightedText = text;
    words.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-blue-400">${word}</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }}/>;
  };
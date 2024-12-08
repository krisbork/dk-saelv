import React from 'react';
import "./FaqItem.css";

function FaqItem(props: {title: string, content: string}) {
  return (
    <div className="faq-item">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default FaqItem;
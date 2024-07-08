"use client";

import { React, useEffect } from "react";
import "../styles/blog-stylesheet.css";
import "../globals.css";

import articlesData from "../components/DummyBlogData.json";

import Header from "../components/Header";

export default function Blog() {
  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Blog";
  }, []);

  return (
    <div className="hub-blog">
      <Header />
      <div className="hub-blog-main">
        <div className="hub-blog-hero">
          <h1 className="hub-blog-title">Blog</h1>
          <section className="hub-blog-intro">
            Stöber durch unseren Blog und erfahre alles rund um
            <span className="brandname"> HIVENT</span>. Hier findest du
            spannende Themen, welche dich immer auf dem neuesten Stand in der
            Welt der Events halten.
          </section>
        </div>
        <div className="hub-blog-wrapper">
          {articlesData.map((article) => (
            <div className="blog-item">
              <div className="blog-img">{article.thumbnail}</div>
              <div key={article.id} className="blog-right">
                <div className="blog-title">{article.title}</div>
                <div className="blog-date">
                  Veröffentlicht am: {article.date.split("-").join(".")}
                </div>
                <div className="blog-content">
                  {article.content.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Scripts() {
  const pathName = usePathname();

  useEffect(() => {
    const loadScript = (src: String) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script") as HTMLScriptElement;
        script.src = `${src}`;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const jsFiles = [
      'js/jquery-3.6.0.min.js',
      'js/waypoints.min.js',
      'js/tw-elements.umd.min.js',
      'js/cd-headline.js',
      'js/jquery.counterup.min.js',
      'js/swiper-bundle.min.js',
      'js/scrollIt.min.js',
      'js/circle-progress.min.js',
      'js/theme-mode.js',
      'js/script.js',
    ];

    const loadJSFiles = async (files: Array<String>) => {
      try {
        for (const js of files) {
          await loadScript(js); // Pass js file path as a string
        }
      } catch (error) {
        console.error("Error loading :", error);
      }
    };

    loadJSFiles(jsFiles);

    // Clean up on unmount
    return () => {
      jsFiles.forEach((js) => {
        const script = document.querySelector(`script[src="${js}"]`) as HTMLScriptElement | null; // Correct selector
        script && script.parentNode && script.parentNode.removeChild(script);
      });
    };
  }, []);

  useEffect(() => {
    const loadScript = (src: String) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script") as HTMLScriptElement;
        script.src = `${src}`;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const files = [
      'js/swiper-bundle.min.js',
      'js/jquery.counterup.min.js',
      'js/scrollIt.min.js',
      'js/script.js',

    ]

    const loadJSFiles = async (files: Array<String>) => {
      try {
        for (const js of files) {
          await loadScript(js); // Pass js file path as a string
        }
      } catch (error) {
        console.error("Error loading :", error);
      }
    };

    loadJSFiles(files);

    // Clean up on unmount
    return () => {
      files.forEach((js) => {
        const script = document.querySelector(`script[src="${js}"]`) as HTMLScriptElement | null; // Correct selector
        script && script.parentNode && script.parentNode.removeChild(script);
      });
    };
  }, [pathName]);

  return null; // Since it's just loading scripts and CSS, no need for JSX
}

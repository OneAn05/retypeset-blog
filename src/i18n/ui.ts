import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  toc: string
}

export const ui: Record<Language, Translation> = {
  'de': {
    title: '恋爱笔记',
    subtitle: 'Notizen, Ideen und laufende Arbeiten',
    description: 'Ein mehrsprachiger statischer Blog mit Astro. Ersetzen Sie diesen Platzhalter durch Ihre eigene Beschreibung.',
    posts: 'Beiträge',
    tags: 'Schlagwörter',
    about: 'Über',
    toc: 'Inhaltsverzeichnis',
  },
  'en': {
    title: '恋爱笔记',
    subtitle: 'Notes, ideas, and work in progress',
    description: 'A multilingual static blog built with Astro. Replace this placeholder text with your own introduction.',
    posts: 'Posts',
    tags: 'Tags',
    about: 'About',
    toc: 'Table of Contents',
  },
  'es': {
    title: '恋爱笔记',
    subtitle: 'Notas, ideas y trabajo en curso',
    description: 'Un blog estático multilingüe creado con Astro. Sustituye este texto por tu propia presentación.',
    posts: 'Artículos',
    tags: 'Etiquetas',
    about: 'Acerca de',
    toc: 'Índice',
  },
  'fr': {
    title: '恋爱笔记',
    subtitle: 'Notes, idées et travaux en cours',
    description: 'Un blog statique multilingue construit avec Astro. Remplacez ce texte par votre propre présentation.',
    posts: 'Articles',
    tags: 'Étiquettes',
    about: 'À propos',
    toc: 'Table des matières',
  },
  'ja': {
    title: '恋爱笔记',
    subtitle: 'メモ、アイデア、制作の記録',
    description: 'Astro で構築した多言語対応の静的ブログです。この文章をご自身の紹介文に置き換えてください。',
    posts: '記事',
    tags: 'タグ',
    about: '概要',
    toc: '目次',
  },
  'ko': {
    title: '恋爱笔记',
    subtitle: '메모, 아이디어, 진행 중인 작업',
    description: 'Astro로 만든 다국어 정적 블로그입니다. 이 자리표시자 문구를 자신의 소개로 바꾸세요.',
    posts: '게시물',
    tags: '태그',
    about: '소개',
    toc: '목차',
  },
  'pl': {
    title: '恋爱笔记',
    subtitle: 'Notatki, pomysły i prace w toku',
    description: 'Wielojęzyczny blog statyczny zbudowany z Astro. Zastąp ten tekst własnym opisem.',
    posts: 'Artykuły',
    tags: 'Tagi',
    about: 'O stronie',
    toc: 'Spis treści',
  },
  'pt': {
    title: '恋爱笔记',
    subtitle: 'Notas, ideias e trabalhos em andamento',
    description: 'Um blog estático multilíngue criado com Astro. Substitua este texto pela sua própria apresentação.',
    posts: 'Artigos',
    tags: 'Tags',
    about: 'Sobre',
    toc: 'Sumário',
  },
  'ru': {
    title: '恋爱笔记',
    subtitle: 'Заметки, идеи и работа в процессе',
    description: 'Многоязычный статический блог, созданный с Astro. Замените этот текст собственным описанием.',
    posts: 'Посты',
    tags: 'Теги',
    about: 'О блоге',
    toc: 'Оглавление',
  },
  'zh': {
    title: '恋爱笔记',
    subtitle: '记录爱与成长的日常',
    description: '恋爱笔记，记录爱与成长的日常。',
    posts: '文章',
    tags: '标签',
    about: '关于',
    toc: '目录',
  },
  'zh-tw': {
    title: '恋爱笔记',
    subtitle: '記錄愛與成長的日常',
    description: '恋爱笔记，記錄愛與成長的日常。',
    posts: '文章',
    tags: '標籤',
    about: '關於',
    toc: '目錄',
  },
}

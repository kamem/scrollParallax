<template>
  <div class="app">
    <main id="contents">
      <article class="content-body">
        <router-view />
      </article>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>
:root {
  --main-color: #3bbfce;
  --main-bg-color: #f5f5f5;
  --content--max-width: 40.625rem;
  --border-bottom: 1px solid rgba(0,0,0,0.05);
  --link-color: #666;
  --text-color: #555;
  --code-bg-color: #fff;
  --entry-title-color: #f5f5f5;
  --paper-background-color: rgba(255, 255, 255, 0.8);
}

* {
  margin: 0;
  padding: 0;
  font-family: 'M PLUS 1p', sans-serif;
}

html {
  background-color: var(--main-bg-color);
  transition: all 0.5s;
}


a {
  -webkit-tap-highlight-color: transparent;
}

.content-body {
  margin: 0 auto;
  max-width: calc(var(--content--max-width) + 7.5%);

  & i {
    font-style: none;
  }

  & h2,
  & h3,
  & h4,
  & h5 {
    & i {
      display: none;
    }
  }


  & li,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & p,
  & pre,
  & table {
    margin: 0 5%;
    line-height: 1.6;
    font-weight: normal;
    position: relative;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    letter-spacing: 0.13em;
    text-decoration: none;
    color: var(--text-color);

    & h2,
    & h3,
    & h4,
    & h5,
    & p,
    & table {
      margin: 0;
    }
  }

  & :not(.normal) img {
    width: 100%;
  }

  & .code-lang {
    margin: 0 5%;
    padding: 2px 8px;
    border-bottom: none;
    background-color: var(--paper-background-color);
    color: var(--text-color);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    display: inline-block;
    font-size: 12px;
  }

  & pre {
    margin-bottom: 24px;
    color: #666;
    box-sizing: border-box;
    padding: 8px !important;
    border: 1px solid #ddd !important;
    background-color: var(--code-bg-color);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    overflow: auto;
    font-size: 14px;
    letter-spacing: 0;
    position: relative;
  }

  & h1 {
    padding-top: 40px;
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.4;
    word-break: break-all;
    border-bottom-width: 3px;

    &:first-child {
      margin-top: 0;
    }
  }

  & h2 {
    margin-top: 40px;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.4;
    word-break: break-all;
    border-bottom-width: 3px;

    &:first-child {
      margin-top: 0;
    }
  }

  & h3 {
    margin-top: 40px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    border-bottom-width: 2px;

    &:first-child {
      margin-top: 0;
    }
  }

  & h4 {
    font-size: 15px;
    margin-bottom: 8px;
    &:before {
      content: '↘';
    }
  }

  & p {
    margin-bottom: 32px;
    font-size: 15px;
  }

  & li {
    margin-left: 10%;
    border: none;
    font-size: 15px;
    &:last-child {
      margin-bottom: 40px;
    }
    & pre {
      margin: 0;
    }

    & li {
      margin-bottom: 0 !important;
    }
  }

  & ul li {
    list-style-type: none;
    box-sizing: border-box;
    &:before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: var(--main-color);
      display: block;
      position: absolute;
      top: 0.6em;
      left: -24px;
      margin: auto 0;
    }
  }

  & a {
    display: inline-block;
    text-decoration: underline;
    font-size: 15px;
    letter-spacing: 0.13em;
    color: var(--link-color);
    word-break: break-all;
    &:hover {
      opacity: 0.6;
      .tags {
        opacity: 1;
      }
    }

    &.imgLink {
      display: block;
    }
  }

  & table {
    font-size: 14px;
    margin-bottom: 25px;
    border-collapse: collapse;
    overflow: auto;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);

    & th,
    & td {
      padding: 8px 8px;
      border: 1px solid #ddd;
      background-color: #fff;
    }

    & tr:nth-child(odd) td {
      background-color: #f9f9f9;
    }
    & th {
      background-color: #666;
      color: #fff;
    }

    @media screen and (max-width: 40.625rem) {
      table-layout: fixed;
    }
  }

  & blockquote {
    margin: 0 1%;
    padding-top: 16px;
    margin-bottom: 24px;
    background-color: rgba(255, 255, 255, 0.5);
    border-left: 4px solid #ddd;
    overflow: auto;
    & > * {
      color: #777;
    }
  }

  & hr {
    border: none;
    border-bottom: 5px solid rgba(0,0,0,0.05);
    margin-bottom: 40px;
  }
}

.dark {
  & .content-body {
    & pre {
      border: 1px solid #000 !important;
      background: #000;
      & .pun {
        color: #fff;
      }
      & .pln {
        color: #fff;
      }
      & .kwd {
        color: var(--main-color);
      }
      & .str {
        color: #da4a53;
      }
      & .tag {
        color: var(--main-color);
      }
      & .atv {
        color: #da4a53;
      }
      & .atv {
        color: #da4a53;
      }
      & .atn {
        color: #fff;
      }
    }
    & table {
      & th,
      & td {
        border: 1px solid #000;
        background-color: #111;
      }
      & th {
        background-color: #000;
      }
      & tr:nth-child(odd) td {
        background-color: #1a1a1a;
      }
    }

    & blockquote {
      background-color: rgba(255, 255, 255, 0.05);
      border-left: 4px solid #111;
    }
  }
}
</style>

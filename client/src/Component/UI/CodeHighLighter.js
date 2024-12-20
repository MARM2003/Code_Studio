// import React, { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { IoCopyOutline } from "react-icons/io5";
// import {
//   a11yDark,
//   agate,
//   anOldHope,
//   androidstudio,
//   arta,
//   ascetic,
//   atelierCaveDark,
//   atelierDuneDark,
//   atelierEstuaryDark,
//   atelierForestDark,
//   atelierHeathDark,
//   atelierLakesideDark,
//   atelierPlateauDark,
//   atelierSavannaDark,
//   atelierSeasideDark,
//   atelierSulphurpoolDark,
//   atomOneDark,
//   brownPaper,
//   codepenEmbed,
//   colorBrewer,
//   darcula,
//   dark,
//   defaultStyle,
//   docco,
//   dracula,
//   far,
//   foundation,
//   github,
//   githubGist,
//   googlecode,
//   grayscale,
//   gruvboxDark,
//   hopscotch,
//   hybrid,
//   idea,
//   irBlack,
//   isblEditorDark,
//   kimbieDark,
//   magula,
//   monoBlue,
//   monokai,
//   monokaiSublime,
//   nord,
//   obsidian,
//   ocean,
//   paraisoDark,
//   pojoaque,
//   purebasic,
//   qtcreatorDark,
//   railscasts,
//   rainbow,
//   routeros,
//   schoolBook,
//   shadesOfPurple,
//   solarizedDark,
//   sunburst,
//   tomorrow,
//   tomorrowNight,
//   tomorrowNightBlue,
//   tomorrowNightBright,
//   tomorrowNightEighties,
//   vs,
//   vs2015,
//   xcode,
//   xt256,
//   zenburn,
// } from "react-syntax-highlighter/dist/esm/styles/hljs";

// const CodeHighLighter = ({code,language}) => {
//   console.log(code,language);

//   const [copied, setCopied] = useState(false);
//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 1500);
//   };
//   const availableThemes = {
//     a11yDark,
//     agate,
//     anOldHope,
//     androidstudio,
//     arta,
//     ascetic,
//     atelierCaveDark,
//     atelierDuneDark,
//     atelierEstuaryDark,
//     atelierForestDark,
//     atelierHeathDark,
//     atelierLakesideDark,
//     atelierPlateauDark,
//     atelierSavannaDark,
//     atelierSeasideDark,
//     atelierSulphurpoolDark,
//     atomOneDark,
//     brownPaper,
//     codepenEmbed,
//     colorBrewer,
//     darcula,
//     dark,
//     defaultStyle,
//     docco,
//     dracula,
//     far,
//     foundation,
//     github,
//     githubGist,
//     googlecode,
//     grayscale,
//     gruvboxDark,
//     hopscotch,
//     hybrid,
//     idea,
//     irBlack,
//     isblEditorDark,
//     kimbieDark,
//     magula,
//     monoBlue,
//     monokai,
//     monokaiSublime,
//     nord,
//     obsidian,
//     ocean,
//     paraisoDark,
//     pojoaque,
//     purebasic,
//     qtcreatorDark,
//     railscasts,
//     rainbow,
//     routeros,
//     schoolBook,
//     shadesOfPurple,
//     solarizedDark,
//     sunburst,
//     tomorrow,
//     tomorrowNight,
//     tomorrowNightBlue,
//     tomorrowNightBright,
//     tomorrowNightEighties,
//     vs,
//     vs2015,
//     xcode,
//     xt256,
//     zenburn,
//     // Add more themes as needed
//   };
//   const [selectedTheme, setSelectedTheme] = useState(availableThemes.docco);
//   const handleThemeChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedTheme(availableThemes[selectedValue] || availableThemes.docco);
  
//   };

//   return (
//     <div>
//       <div className="flex justify-between mb-5">
//         <div>
//           <label htmlFor="themeSelector">Select Theme: </label>
//           <select
//             id="themeSelector"
//             onChange={handleThemeChange}
//             value={selectedTheme}
//           >
//             {Object.keys(availableThemes).map((themeName) => (
//               <option key={themeName} value={themeName}>
//                 {themeName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <CopyToClipboard text={code} onCopy={handleCopy}>
//           <button className="flex items-center ml-1">
//             {copied ? "Copied!" : "Copy"}
//             <IoCopyOutline />
//           </button>
//         </CopyToClipboard>
//       </div>
//       <SyntaxHighlighter
//         language={language}
//         style={selectedTheme}
//       >
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default CodeHighLighter;

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import {
  a11yDark,
  agate,
  anOldHope,
  androidstudio,
  arta,
  ascetic,
  atelierCaveDark,
  atelierDuneDark,
  atelierEstuaryDark,
  atelierForestDark,
  atelierHeathDark,
  atelierLakesideDark,
  atelierPlateauDark,
  atelierSavannaDark,
  atelierSeasideDark,
  atelierSulphurpoolDark,
  atomOneDark,
  brownPaper,
  codepenEmbed,
  colorBrewer,
  darcula,
  dark,
  defaultStyle,
  docco,
  dracula,
  far,
  foundation,
  github,
  githubGist,
  googlecode,
  grayscale,
  gruvboxDark,
  hopscotch,
  hybrid,
  idea,
  irBlack,
  isblEditorDark,
  kimbieDark,
  magula,
  monoBlue,
  monokai,
  monokaiSublime,
  nord,
  obsidian,
  ocean,
  paraisoDark,
  pojoaque,
  purebasic,
  qtcreatorDark,
  railscasts,
  rainbow,
  routeros,
  schoolBook,
  shadesOfPurple,
  solarizedDark,
  sunburst,
  tomorrow,
  tomorrowNight,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  vs,
  vs2015,
  xcode,
  xt256,
  zenburn,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeHighLighter = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(docco);
  const [selectedThemeName, setSelectedThemeName] = useState("docco");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const availableThemes = {
    a11yDark,
    agate,
    anOldHope,
    androidstudio,
    arta,
    ascetic,
    atelierCaveDark,
    atelierDuneDark,
    atelierEstuaryDark,
    atelierForestDark,
    atelierHeathDark,
    atelierLakesideDark,
    atelierPlateauDark,
    atelierSavannaDark,
    atelierSeasideDark,
    atelierSulphurpoolDark,
    atomOneDark,
    brownPaper,
    codepenEmbed,
    colorBrewer,
    darcula,
    dark,
    defaultStyle,
    docco,
    dracula,
    far,
    foundation,
    github,
    githubGist,
    googlecode,
    grayscale,
    gruvboxDark,
    hopscotch,
    hybrid,
    idea,
    irBlack,
    isblEditorDark,
    kimbieDark,
    magula,
    monoBlue,
    monokai,
    monokaiSublime,
    nord,
    obsidian,
    ocean,
    paraisoDark,
    pojoaque,
    purebasic,
    qtcreatorDark,
    railscasts,
    rainbow,
    routeros,
    schoolBook,
    shadesOfPurple,
    solarizedDark,
    sunburst,
    tomorrow,
    tomorrowNight,
    tomorrowNightBlue,
    tomorrowNightBright,
    tomorrowNightEighties,
    vs,
    vs2015,
    xcode,
    xt256,
    zenburn,
  };

  const handleThemeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTheme(availableThemes[selectedValue] || availableThemes.docco);
    setSelectedThemeName(selectedValue);
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <div>
          <label htmlFor="themeSelector">Select Theme: </label>
          <select
          className="border"
            id="themeSelector"
            onChange={handleThemeChange}
            value={selectedThemeName}
          >
            {Object.keys(availableThemes).map((themeName) => (
              <option key={themeName} value={themeName}>
                {themeName}
              </option>
            ))}
          </select>
        </div>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="flex items-center ml-1">
            {copied ? "Copied!" : "Copy"}
            <IoCopyOutline />
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language={language} style={selectedTheme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighLighter;


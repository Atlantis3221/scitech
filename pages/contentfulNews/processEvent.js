import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default processAsset = (asset) => {
  if (asset?.fields?.body) {
    console.log(asset.fields)
    const options = {
      renderMark: {
        [MARKS.BOLD]: text => `<b>${text}</b>`
      },
      renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                console.log(node.data.target.fields.file.url)
                const url = node.data.target.fields.file.url
                return `<img src="https://${url}"/>`
              }
          }
      }
  
    return documentToHtmlString(asset.fields.body, options)
  }

  }


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const processTwoColumnModule = (module) => {
    const fields = module.data.target.fields
    const title = fields.title

    return '<div class="main-module">' + 
    processTitle(title) + 
    '<div class="module-content">' + 
    processPreColumnText(fields?.preColumnText) + 
    '<div class="two-columns">' + 
    '<div>' + 
    processColumn(fields.columnOne) + 
    '</div>' + 
    '<div>' + 
    processColumn(fields.columnTwo) + 
    '</div>' + 
    '</div>'  + 
    '</div>' + 
    '</div>'
  }

  const processTitle = (title) => {
      return `<div class="module-title">${title}</div>`
  }

  const processPreColumnText = (text) => {
      if (text) {
        return documentToHtmlString(text)
      }
      else return '<div></div>'
  }

  const processColumn = (column) => {
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => `<b>${text}</b>`
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                if (node.data.target.sys.contentType.sys.id === "expertModule") { 
                    const fields = node.data.target.fields
                    console.log(fields)
                    return `<div class="expert-flex"> 
                    <img class="expert-image" src=https:${fields.photo.fields.file.url} />
                    <div>  
                    <div> ${documentToHtmlString(fields.name)}</div>
                    <div> ${documentToHtmlString(fields.description)} </div>
                    </div>
                    </div>`
                }
            }
        }
      };
    if (column) {
        return  documentToHtmlString(column, options)
      }
      else return '<div></div>'
  }



  export const calculateDuration = (d1, d2) => {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return (d2M+12*d2Y)-(d1M+12*d1Y);
  }

  export const formattedDate = (date) => {
      if (date) {
        const month = date
        .toLocaleDateString("ru-RU", {
          month: "long",
        })
        .split(".")
        .join("");
      const day = date.getDate();
      const year = date.getFullYear();
      return `${capitalizeFirstLetter(month)} ${year}`;
      }
  };
  
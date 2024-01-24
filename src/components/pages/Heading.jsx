import React from "react";
import { Link } from "react-router-dom"

const renderTitleContent = ({ linkAttrs, linkClassName, headingText }) => {
  return linkAttrs?.href ? <Link {...linkAttrs} className={linkClassName}>{headingText}</Link> : headingText
}
const renderHeading = ({ headingLevel, headingAttrs, linkAttrs, openInNewTab, linkClassName = "link"}) => {

  const newClassName = () => {
    let className;
    switch(headingLevel) {
    case 1:
       className = "heading h1";
    case 2:
       className = "heading h2"
    case 3:
       className = "heading h3";
    case 4:
       className = "heading h4";
    case 5:
       className = "heading h5";
    case 6:
       className = "heading h6";
    default:
      className = "heading h1";
    }
  }

  const className = newClassName();
  const headingClassName = `${className} ${headingAttrs?.className}`;
  const linkClassName = `link ${linkAttrs?.className}`};


  switch(headingLevel) {
    case 1:
      return (
        <h1 {...headingAttrs} className={headingClassName}>
          renderTitleContent({linkAttrs, linkClassName, headingText })
        </h1>
      );
    case 2:
      return (
        <h2 {...headingAttrs} className={headingClassName}>
          linkHref ? <Link {...linkAttrs} className={linkClassName}>{headingText}</Link> : headingText
        </h2>
      );
    case 3:
      return (
        <h3 {...headingAttrs}>
          linkHref ? <Link {...linkAttrs}>{headingText}</Link> : headingText
        </h3>
      );
    case 4:
      return (
        <h4 {...headingAttrs}>
          linkHref ? <Link {...linkAttrs}>{headingText}</Link> : headingText
        </h4>
      );
    case 5:
      return (
        <h5 {...headingAttrs}>
          linkHref ? <Link {...linkAttrs}>{headingText}</Link> : headingText
        </h5>
      );
    case 6:
      return (
        <h6 {...headingAttrs}>
          linkHref ? <Link {...linkAttrs}>{headingText}</Link> : headingText
        </h6>
      );
    default:
      break;
  }
}

const Heading = ({
  headingAttrs = {},
  headingText,
  linkAttrs = { href: null },
  openInNewTab = false,
  linkClassName = null,
  openInNewTab = false
}) => {
  const linkProps = {
    ...(linkAttrs?.href ? { href: linkAttrs.href } : {}),
    ...(linkAttrs?.to ? { to: linkAttrs.to } : {}),
    ...(openInNewTab ? { _target: "blank" } : {}),
    ...(linkClassName ? { className: linkClassName } : {})
  }
  const heading = renderHeading({ headingAttrs, headingText, linkAttrs, openInNewTab })
  return (
    <div>

    </div>
  )
}

export default Heading;
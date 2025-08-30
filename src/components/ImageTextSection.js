import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const headLevels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};

const ImageTextSection = ({ blok }) => {
  return (
    <div
      className="w-full bg-white overflow-hidden flex flex-col md:flex-row"
      {...storyblokEditable(blok)}
    >
      <TextSection blok={blok}></TextSection>
      <ImageSection blok={blok}></ImageSection>
    </div>
  );
};

const TextSection = ({ blok }) => {
  return (
    <div className="p-4 flex-1 text-left">
      {blok.headline.content.map(HeadLine)}
      <br />
      {blok.text.content.map((pBlock, hlid) => (
        <p key={hlid}>
          {pBlock.content.map((txtBlock, tid) =>
            txtBlock.type === "hard_break" ? (
              <br key={`br-${tid}`} />
            ) : (
              <span key={tid}>{txtBlock.text}</span>
            )
          )}
        </p>
      ))}
      <br />
      {blok.button.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

const HeadLine = (hlBlock, hlid) => {
  const headLevel = headLevels[hlBlock.attrs.level] || headLevels[2];
  const weights = {
    bold: 'font-semibold',
    default: ''
  }
  return (
    <div className={headLevel} key={hlid}>
      {hlBlock.content.map((txtBlock, tid) =>
        txtBlock.type === "hard_break" ? (
          <br key={`br-${tid}`} />
        ) : (
          <span
            className={txtBlock.marks
              ?.map(({ type }) => (weights[type]||weights.default))
              .join(" ")}
            key={tid}
          >
            {txtBlock.text}
          </span>
        )
      )}
    </div>
  );
};

const ImageSection = ({ blok }) => {
  const rightImgStyle = { backgroundImage: `url(${blok.image.filename})` };
  return (
    <div
      className={`p-4 flex-1 bg-black rounded-t-2xl bg-contain bg-center bg-no-repeat`}
      style={rightImgStyle}
    >
      <img
        className="opacity-0 h-full w-full"
        src={blok.image.filename}
        alt={blok.image.alt}
        title={blok.image.title}
      ></img>
    </div>
  );
};

export default ImageTextSection;

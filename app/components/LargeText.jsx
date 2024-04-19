// TextComponent.js
const TextComponent = ({ children }) => {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
        {children}
      </h1>
    );
  };
  
  export default TextComponent;
  
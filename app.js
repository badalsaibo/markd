class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "**M A R K D** is a pretty simple markdown preview I created on React to learn about shared state.\n\nThe setup is pretty minimal too.\nIt loads React in a script tag, and uses [Marked.js](https://github.com/markedjs/marked) for parsing the markdown.\n\nNow that you're here, take a quick look at some markdown shortcuts.\n\n# Heading 1 \n## Heading 2\n### Heading 3\n#### Heading 4\n\n_italic_\n\n**bold**\n\n`code` \n\n### Ordered List\n1. Item One\n2. Item Two\n\n### Unordered List\n* Item \n* Item\n\n\n\n\n"
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div class="main">
        <Sidebar />
        <MarkdownEditor value={this.state.value} handleChange={this.handleChange}/>
        <MarkdownPreview value={this.state.value}/>
      </div>
    );
  }
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--header">
        MARKD
      </div>
    </div>
  );
}

function MarkdownEditor(props) {
  return (
    <div className="markdown-editor">
      <textarea value={props.value} onChange={props.handleChange}></textarea>
    </div>
  );
}

function MarkdownPreview(props) {

  function rawMarkup(md) {
    return {
      __html: marked(md)
    }
  }


  return (
    <div dangerouslySetInnerHTML={rawMarkup(props.value)} className="markdown-preview">
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
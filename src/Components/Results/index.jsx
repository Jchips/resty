import "./Results.scss";

const Results = (props) => {
  return (
    <section className={`${props.data ? "results-container" : null}`}>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
};

export default Results;

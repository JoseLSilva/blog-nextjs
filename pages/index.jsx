import { Layout, Container, Posts } from "../components";

const items = ["1", "2", "3", "4"];

export default () => (
  <Layout>
    <Container>
      <div className="flex flex-wrap">
        {items.map(key => (
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-full my-2 px-2"
            key={key}
          >
            <Posts />
          </div>
        ))}
      </div>
    </Container>
  </Layout>
);

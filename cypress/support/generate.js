import { build, fake, sequence } from "test-data-bot";

const buildUser = build("User").fields({
  name: fake(f => f.name.findName()),
  email: sequence(x => `jack${x}@test.com`),
  username: fake(f => f.internet.userName()),
  password: fake(f => f.internet.password())
});
export { buildUser };

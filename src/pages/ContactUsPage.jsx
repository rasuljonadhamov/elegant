import { Button, Flex } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

function ContactUsPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <h1>Contact Us</h1>
      <form>
        <Flex vertical gap={16} style={{ width: "350px" }}>
          <div>
            <label>Name:</label>
            <Input placeholder="Enter Name..." />
          </div>
          <div>
            <label>Email:</label>
            <Input type="email" placeholder="Enter Email..." />
          </div>
          <div>
            <label>Message:</label>
            <TextArea
              showCount
              maxLength={100}
              placeholder="Enter text..."
              style={{
                height: 120,
                resize: "none",
                marginBottom: "20px",
              }}
            />
          </div>
          <Button type="primary" size="large">
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  );
}

export default ContactUsPage;

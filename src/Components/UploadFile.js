import { React, Component } from "react";
import { Select ,Upload ,message, Button} from "antd";
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

class UploadFile extends Component {
  render() {
    return(
      <div>
      File Type :<Select
        defaultValue="Img"
        style={{ width: 120 }}
        onChange={this.handleChange}
      >
        <Option value="Pdf ">Pdf</Option>
        <Option value="Doc">Doc</Option>
        <Option value="Img">Img</Option>
      </Select>
      <br/><br/>
      <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
      </div>
    );
  }
}

export default UploadFile;





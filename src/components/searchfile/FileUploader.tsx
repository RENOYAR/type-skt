// @ts-nocheck
import {useRef, useState} from 'react';
import Button from 'components/button/Button';
import {FileUploderWrap} from './StyledFileUploader';

export default function FileUploader() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = event => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <FileUploderWrap>
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        style={{display: 'none'}}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <input
        type="text"
        value={fileName}
        placeholder="파일을 선택하세요"
        readOnly
        onClick={handleClick}
        style={{cursor: 'pointer'}}
      />
      <Button $size="small" $variant="secondaryGray" onClick={handleClick}>
        파일 찾기
      </Button>
    </FileUploderWrap>
  );
}

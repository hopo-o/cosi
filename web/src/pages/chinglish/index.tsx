import { useLockFn } from "ahooks";
import { Button, Divider, Flex, Input, message, Spin, Typography } from "antd";
import axios from "axios";
import { useState } from "react";

interface RefineData {
  english: string;
  chinese: string;
}

export function ChinglishPage() {
  const [text, setText] = useState<string>();
  const [refineData, setRefineData] = useState<RefineData>();
  const [loading, setLoading] = useState(false);

  const ready = refineData || loading;

  const onSearch = useLockFn(async () => {
    setLoading(true);

    try {
      setLoading(true);
      const res = await axios<RefineData>({
        url: "http://localhost:8001/refine/chinglish",
        params: { text },
      });

      setRefineData(res.data);
    } catch (error) {
      console.error(error);
      message.error("fetch error");
    } finally {
      setLoading(false);
    }
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onSearch();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setRefineData(undefined);
  };

  return (
    <Flex vertical align="center" gap="large">
      <Input.TextArea
        placeholder="请输入你的“Chinglish”..."
        style={{ width: 600 }}
        autoSize={{ minRows: 3, maxRows: 6 }}
        value={text}
        size="large"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <Button
        style={{ width: 600 }}
        disabled={!text}
        type="primary"
        size="large"
        onClick={onSearch}
        loading={loading}
      >
        提交
      </Button>

      {ready && (
        <>
          <Divider />

          <Spin spinning={loading}>
            {refineData?.chinese ? (
              <Typography.Paragraph>
                “<strong>{refineData?.chinese}</strong>” 更地道的英文表述是：
              </Typography.Paragraph>
            ) : null}
            <Input.TextArea
              placeholder="这里将会展示纯正的English"
              autoSize={{ minRows: 3, maxRows: 6 }}
              size="large"
              style={{ width: 600 }}
              value={refineData?.english}
            />
          </Spin>
        </>
      )}
    </Flex>
  );
}

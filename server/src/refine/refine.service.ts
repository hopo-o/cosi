import { ChatDeepSeek } from '@langchain/deepseek';
import { Injectable } from '@nestjs/common';
import { ChatPromptTemplate } from '@langchain/core/prompts';

const systemTemplate = `
下面我将给出一段英文，你需要理解翻译成中文，并将其改造成更加地道和优雅的英文表述。以JSON的格式进行回答，格式如下：
{
  "chinese": "xxx",
  "english": "xxx"
}
`;
const promptTemplate = ChatPromptTemplate.fromMessages<{ text: string }>([
  ['system', systemTemplate],
  ['user', '{text}'],
]);

@Injectable()
export class RefineService {
  async refineChinglish(text: string) {
    try {
      const model = new ChatDeepSeek({
        model: 'deepseek-chat',
        temperature: 1.3,
      });

      const promptValue = await promptTemplate.invoke({ text });
      const message = await model.invoke(promptValue, {
        response_format: { type: 'json_object' },
      });

      console.log('RefineService ~ refineEnglish ~ message:', message);

      return message.content as string;
    } catch (error) {
      console.error(error);
    }
  }
}

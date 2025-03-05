import { ChatDeepSeek } from '@langchain/deepseek';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefineService {
  async refineChinglish(text: string) {
    try {
      const model = new ChatDeepSeek({
        model: 'deepseek-chat',
      });

      const message = await model.invoke([
        [
          'system',
          `下面我将给出一段英文，你需要理解翻译成中文，并将其改造成更加地道和优雅的英文表述。以JSON的格式进行回答，格式如下：
          {
            "chinese": "xxx",
            "english": "xxx"
          }
          `,
        ],
        ['human', text],
      ]);

      console.log('RefineService ~ refineEnglish ~ message:', message);

      return message.content as string;
    } catch (error) {
      console.error(error);
    }
  }
}

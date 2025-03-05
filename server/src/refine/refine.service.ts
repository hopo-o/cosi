import { ChatDeepSeek } from '@langchain/deepseek';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefineService {
  async refineEnglish(text: string) {
    console.log('🧐 ~ RefineService ~ refineEnglish ~ text:', text);

    // return `[Refined]: ${text}`;

    try {
      const model = new ChatDeepSeek({
        model: 'deepseek-chat',
      });

      const message = await model.invoke([
        [
          'system',
          `下面我将给出一段英文，你需要理解翻译成中文，并将其改造成更加地道和优雅的英文表述。以下面的形式进行回答：
          【中文】: xxx
          【英文】: xxx
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

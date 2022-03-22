[toc]

# Little-Board主控板

<img src="Little-Board主控板.assets\image-20220318175918696.png" alt="image-20220318175918696" style="zoom:150%;" />

## 1 Little-Board介绍
Little-Board主控板完美结合Scratch和Arduino，具有扩展丰富、趣味编程、美观小巧等优点。积木底座可以完美兼容乐高积木小颗粒搭建。
由于该主板没有下载串口，所以需要配合外部下载器进行程序下载。

## 2 Little-Board板的适用软件

Little-Board主板和普通Arduino板一样适用于S4A，ArduBlock，Arduino IDE等编程环境，更是与主流图形化编程软件AS-Block完美契合，是一款兼备了Arduino与Scratch的学习工具，通过AS-Block软件，可以轻松的实现LED的点亮、蜂鸣器歌唱、电机转动等功能，非常适合编程初学者的入门和创意想法的实现。

## 3 Little-Board板的功能

Little-Board主板的处理器核心是ATmega328，具有9路数字输入/输出（其中6路可作为PWM输出），4路模拟输入，一个16MHZ晶体振荡器，一个miniUSB，一个电池插座，一个复位按钮，一个ICSP固件上传口，及电机驱动和其他功能扩展接口。

<img src="Little-Board主控板.assets\image-20220318175942648.png" alt="image-20220318175942648" style="zoom:150%;" />

**处理器概要：**
●芯片：ATmega328
●工作电压：5V
●输入电压：5-6V
●数字IO脚：14个
●模拟输入脚：6个
●IO脚直流电流：40mA
●Flash Memory：32KB（0.5KB用于Bootloader）
●SRAM：2KB
●EEPROM：1KB
●工作时钟：16MHz
**数字输入/输出(Digital Input/Output)：**
D3-D6、D9-13口为数字输入输出口，可进行数字量传感器的读取和执行期间的控制，包括LED灯的点亮，按钮状态的监测等，均可使用这些I/O口。
**模拟输入(Analog Input):**
A0-A3口为模拟输入口，可进行模拟量传感器的读取，例如温度、光强等，均可以使用这些端口。
**PWM输出：**

CF-Board数字引脚中的D3、D5、D,6、D9、D10、D11引脚具有PWM输出功能，可进行电机、LED亮度等的控制。由于内置定时器的原因，在调用arduino官方舵机库时，D9，D10将无法进行PWM输出。
**程序下载口：**
通过串口下载器连接Little-Board主板和电脑即可进行程序下载。
**外接传感器接口：**
数码管接口：提供有专门的数码管显示模块接口，同时占用D9、D10、D11，即在使用数码管时，D9、D10、D11不可使用，结合AS-Block使用更方便。
RGB接口：提供有专门的多彩灯模块接口，同时占用D9、D10、D11，通过PWM控制，可实现RGB任意调色，结合AS-Block使用更方便。
超声波接口：提供专门的超声波接口（可排母或排阵连接），同时占用D2、D3，结合AS-Block使用更方便。
**电机接口：**
主板带有双路驱动，支持两路电机调速，制动，正反转控制，可以实现小车等的控制，其中左电机M1占用D5（控制转速）D7（控制方向），右电机M2占用D6（控制转速）D8（控制方向）。
**供电：**
主板采用5V外接电源供电（可采用4节标准1.5V/节的干电池或1.2V/节的充电电池）。
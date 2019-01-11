import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity,Alert ,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Carousel, { ParallaxImage, Pagination }  from 'react-native-snap-carousel';
import { Font } from "expo";

class DetailScreen extends React.Component{
    constructor() {
        super()
        this.state = {
          entries_HP: [
            { solution: 'RAM, SSD và card đồ họa là những thứ quan trọng nhất bạn cần nâng cấp để cải thiện hiệu suất trên hệ thống của mình. Bạn có thể sẽ thấy các cải tiến tức thời về mặt hiệu năng sau khi tiếp hành nâng cấp',problem1:'Bạn có cảm thấy PC của mình đang chạy chậm không? Có thể bạn đã thử sử dụng những phần mềm tối ưu hóa và nghiên cứu đến tất cả các giải pháp phổ biến, nhưng dường như vẫn không mấy hiệu quả, tốc độ của thiết bị cũng được cải thiện đôi chút, nhưng không đáng kể. Trong trường hợp này, đã đến lúc bạn tính đến chuyện nâng cấp một số bộ phận phần cứng của mình.'+

            'Nhưng lại thêm một vấn đề nữa xuất hiện, nếu ngân sạch của bạn không quá dư giả, chắc hẳn bạn sẽ phải thắc mắc rằng chính xác thì thành phần phần nào sẽ giúp cải thiện hiệu suất của hệ thống tốt nhất? Bạn nên bắt đầu từ đâu? Những nâng cấp nào sẽ mang lại hiệu quả cao nhất với chi phí đầu tư tối ưu nhất? Đây quả thực không phải là một việc đơn giản. <br/> Mặc dù bạn nên luôn để ý điều chỉnh những bản nâng cấp của mình để phù hợp với nhu cầu cụ thể, nhưng dưới đây là một số gợi ý về những gói nâng cấp có ảnh hưởng lớn nhất đến hiệu suất tổng thể của hệ thống, được sắp xếp theo thứ tự từ quan trọng nhất đến ít ảnh hưởng nhất để qua đó, bạn sẽ có được một kế hoạch đầu tư hợp lý cho hệ thống máy tính của mình trong thời gian sắp tới.',problem_title1:'<br/> RAM <br/>',problem2: 'Bổ sung thêm bộ nhớ RAM là một trong những gói nâng cấp cải thiện hiệu suất PC dễ dàng và và hiệu quả nhất mà đa số chúng ta đều có thể thực hiện được.Với giá cả phải chăng, bạn có thể thực hiện nâng cấp này trên hầu như bất kỳ máy tính nào (bao gồm cả các loại máy tính xách tay), và nó cũng không đòi hỏi nhiều kiến thức chuyên sâu về công nghệ. Nếu bạn chưa bao giờ mở cây CPU máy tính của mình ra trước đây thì bây giờ đã đến lúc rồi đó, và các tạo tác cũng rất dễ dàng thôi! Hãy tham khảo bài viết "Hướng dẫn cách nâng cấp RAM trên máy tính và Laptop" của chúng tôi để hiểu rõ hơn về các công đoạn nâng cấp RAM trên một hệ thống máy tính.',
            problem3:'Nâng cấp RAM mang lại hiệu năng tức thời cho hầu hết các PC đang có hiện tượng “lờ đờ”. Đối với các tác vụ tiêu tốn nhiều tài nguyên bộ nhớ như chỉnh sửa video hoặc chơi trò chơi, bạn càng có nhiều RAM thì càng tốt. Ngay cả khi sử dụng với những tác vụ bình thường, lượng RAM phụ sẽ cho phép bạn mở nhiều ứng dụng chạy ẩn hơn, cũng như dễ nhận thấy nhất là bạn có thể làm việc với nhiều tab hơn trong trình duyệt mà không lo chúng bị load lại. <br/> Vậy thì nâng cấp lên bao nhiêu RAM là đủ? 4GB hiện là số dung lượng RAM cơ bản trên hầu hết các thiết bị máy tính cá nhân, nhưng đảm bảo bạn sẽ nhận thấy một cải tiến đáng kể về mặt hiệu năng nếu bạn nâng cấp lên 8GB. Đối với những người thường xuyên phải làm việc với các tác vụ nặng, nên xem xét nâng cấp lên 16GB RAM để có được một mức hiệu năng tối ưu nhất.',problem_title2: '<br/> Card đồ họa <br/>',problem4: 'Có lẽ không có gì lạ khi card đồ họa đứng thứ hai trong danh sách những gói nâng cấp quan trọng nhất đối với hiệu suất của một hệ thống máy tính, nhưng nếu bạn là một game thủ nghiêm túc thì có lẽ card đồ họa nên được xếp ở vị trí đầu tiên thì hợp lý hơn! Còn nếu bạn không phải là một game thủ, hãy những nhà phát triển đồ họa hoặc thiết kế mô hình, hoạt hình 3D thì cũng có thể không cần thiết phải nâng cấp card đồ họa làm gì. <br/> Thực tế mà nói thì không phải đối tượng người dùng nào cũng cần nhiều sức mạnh xử lý đồ họa, vậy nên lược bỏ bớt sức mạnh xử lý đồ họa là một bước đi thông minh và cũng hết sức hợp lý của các nhà sản xuất để tiết kiệm chi phí cũng như mang lại những mức giá bán tốt hơn cho khách hàng. Do đó, các nhà sản xuất máy tính thường có xu hướng chỉ sử dụng card đồ họa tích hợp sẵn trên con chip thay vì card đồ họa chuyên dụng, đó cũng là lý do tại sao nếu bạn đang chỉ sử dụng card đồ tích hợp mà sau đó nâng cấp lên một sản phẩm chuyên dụng, bạn sẽ ngay lập tức nhận ra được những sự thay đổi đến kỳ diệu, đặc biệt là đối với các tác vụ đòi hỏi nhiều đến khả năng xử lý đồ họa như đã nói phía trên. <br/> Mặc dù thực tế là hiệu năng của card đồ họa tích hợp cũng đã được cải thiện đáng kể, thậm chí một số loại còn có hiệu năng tương đương với một vài card đồ họa chuyên dụng giá dưới 2 triệu. Nhưng các chương trình ngày nay cũng không ngừng đòi hỏi yêu cầu xử lý đồ họa cao hơn, vậy nên, nâng cấp lên một sản phẩm có mức giá không quá đắt đỏ, ví dụ như Nvidia GTX 960 có giá bán khoảng chưa đến 4 triệu cũng sẽ là một phương án hợp lý, cung cấp cho bạn một hiệu năng xử lý tốt trong hầu hết các tác vụ đồ họa từ cơ bản đến tương đối nâng cao. Tham khảo bài viết "Danh sách những card đồ họa tốt nhất theo phân khúc giá" của chúng tôi để có một cái nhìn tổng quan về các sản phẩm bạn nên lựa chọn cho lần nâng cấp sắp tới!',problem_title3: '<br/> Ổ lưu trữ dữ liệu <br/>',problem5: 'Có hai lý do để bạn nâng cấp ổ cứng của mình: Một là bạn sắp hết dung lượng lưu trữ hoặc hai là bạn muốn có một hiệu suất xử lý nhanh hơn.'+
            
            'Nếu bạn đã làm mọi thứ có thể để giải phóng dung lượng lưu trữ trên đĩa cứng mà vẫn thường xuyên thiếu dung lượng, thì đã đến lúc bạn phải nâng cấp lên một ổ cứng “ngon” hơn hoặc sử dụng ổ cứng gắn rời. Tuy nhiên, có một điều thú vị là ổ cứng không chỉ quyết định đến việc bao nhiêu dữ liệu sẽ được lưu trữ, mà còn có thể ảnh hưởng rất lớn đến hiệu suất xử lý tổng thể của hệ thống. Hãy cố gắng giữ lại ít nhất 10GB dung lượng trống để hệ điều hành có thể sử dụng cho những lúc cần thiết. <br/> Đối với ổ đĩa cứng (HDD), hãy cân nhắc nâng cấp tốc độ vật lý. Nếu máy tính của bạn hiện có một ổ đĩa 5400RPM, thì việc nâng cấp lên một model 7200RPM sẽ giúp cải thiện tốc độ khá rõ rệt.'+
            
            'Nhưng nếu bạn muốn cải thiện hiệu suất một cách tốt nhất cũng như toàn diện nhất, hãy chuyển sang sử dụng ổ đĩa trạng thái rắn (SSD). SSD sử dụng bộ nhớ flash thay vì một đĩa quay như HDD, và do đó, cho tốc độ đọc ghi nhanh hơn nhiều lần so với ổ đĩa cứng HDD thông thường (chưa kể đến độ tin cậy cũng sẽ cao hơn nữa!).',problem6:'<br/> Phân tích cụ thể, Trung bình, một ổ đĩa 5400RPM có thể đạt được tốc độ đọc ghi lên đến 100MBps, một ổ 7200RPM sẽ có tốc độ đọc ghi lên đến lên đến 150MBps, trong khi ổ đĩa trạng thái rắn SSD có thể sở hữu tốc độ đọc ghi trên 500MB/giây. Các model mới nhất thậm chí có thể có tốc độ nhanh hơn đáng kể, lên đến cả nghìn Mbps. Tuy nhiên, có một nhược điểm đối với các ổ đĩa SSD là chúng có dung lượng nhỏ hơn và đắt hơn nhiều so với các ổ đĩa HDD.',problem_title4: '<br/> Bộ vi xử lý <br/>',problem7: 'Nâng cấp bộ xử lý của PC là một nhiệm vụ khó khăn hơn nhiều so với các các gói nâng cấp khác mà chúng ta đã đề cập đến ở phía trên. Ngoài việc yêu cầu một sự hiểu biết nhất định về mặt chuyên môn, đây không những là một trong những gói nâng cấp đắt tiền hơn cả, mà còn có khả năng phát sinh những vấn đề tương thích nữa. <br/> Tất nhiên, cũng có các vấn đề về tương thích xảy ra trên các gói nâng cấp khác, nhưng chúng có thể được xử lý dễ dàng hơn nhiều. Quan trọng hơn, nâng cấp bộ xử lý không phải lúc nào cũng là điều nên làm và có thể không mang lại nhiều cải thiện về hiệu suất như bạn mong đợi. <br/> Các bài kiểm tra benchmark tại cpubenchmark.net có thể giúp bạn so sánh hiệu suất tương đối của các bộ vi xử lý khác nhau. Nói chung, các thử nghiệm này cho thấy rằng những gói nâng cấp khiêm tốn về bộ xử lý thường không mang lại những cải tiến lớn. Các thử nghiệm chi tiết khác cũng cho thấy hiệu suất của CPU sẽ thay đổi nhiều hay ít tùy thuộc phần lớn vào phần mềm trên hệ thống của bạn.',problem_title5: '<br/> Phần mềm <br/>',problem8: 'Rất có thể các chương trình trên hệ thống của bạn được cài đặt để tự động cập nhật. Nếu không, bạn có thể nhấp vào nút Update ngay khi bạn được thông báo về việc các phiên bản mới của chương trình đó được phát hành.'+
            
            'Trong hầu hết các trường hợp, việc cập nhật lên phiên bản mới là một điều cần thiết phải làm, nhưng không phải lúc nào cũng vậy. Đối với nhiều phần mềm, số hiệu của phiên bản cập nhật được mô tả dưới dạng Major.Minor.Revision. Cụ thể, nếu bạn thấy một bản cập nhật có số hiệu là 0.0.1, thì đó có thể là một bản sửa lỗi. Nếu đó là 0.1.0, thì nó có khả năng là một bản cập nhật nhằm tối ưu hóa và các tính năng mới. Các bản cập nhật nhỏ và bản sửa đổi phải được cài đặt ngay lập tức.'+
            
            'Nhưng các cập nhật chính lại là một vấn đề khác. Hầu như các phiên bản cập nhật chương trình mới đều sẽ sử dụng nhiều tài nguyên hơn các phiên bản cũ, vì vậy nếu phần cứng máy tính của bạn đã đạt đến mức giới hạn tối đa, bạn không nên cập nhật các phiên bản mới này.'+
            
            'Đối với các bản cập nhật hệ điều hành thì cũng tương tự như vậy. Các cập nhật thường xuyên là cần thiết vì lý do hiệu suất và bảo mật, nhưng cập nhật toàn bộ phiên bản mới thì không nên. Các bản cập nhật toàn điện này gần như chắc chắn sẽ có lỗi và có thể khiến hệ thống của bạn chạy chậm đi do phần cứng không theo kịp với những thay đổi quá lớn từ phần mềm.'+
            
            'Nếu PC của bạn vẫn đang hoạt động tốt trên phiên bản phần mềm hiện tại, bạn nên giữ các bản nâng cấp hệ điều hành cho đến khi hoàn toàn chắc chắn rằng chúng sẽ không có bất kỳ lỗi nào và PC của bạn hoàn toàn có thể tương thích được.',problem_title6: '<br/> Các thành phần khác <br/>',problem9: 'Bo mạch chủ là một trong những gói nâng cấp khó khăn nhất trên máy tính, thậm chí còn phức tạp hơn cả nâng cấp CPU vì đơn giản, tất cả các bộ phận của PC khác đều được gắn vào nó. Gói nâng cấp này chỉ đáng xem xét nếu bạn đã quá bất lực với việc bộ xử lý mới không tương thích với thiết lập hiện tại của bạn.'+
            
            'Ngoài ra, cũng sẽ có những thành phần khác cũng nên được nâng cấp nếu cần thiết. Màn hình là một ví dụ. Lấy trường hợp của các nhiếp ảnh gia chuyên nghiệp chẳng hạn. Các nhiếp ảnh gia chắc chắn sẽ được hưởng lợi nhiều hơn từ việc có một màn hình tốt hơn, giúp cho công cụ Lightroom có thể chạy nhanh hơn một chút. Một nhà phát triển web có thể làm việc năng suất hơn hơn với một màn hình thứ hai, tương tự như một nhà văn với một bàn phím cơ loại tốt. Thay vì tập trung hoàn toàn vào hiệu suất, hãy suy nghĩ về cách bạn có thể cải thiện trải nghiệm của mình đối với những nâng cấp liên quan các đến thiết bị ngoại vi như vậy. Tốc độ xử lý là quan trọng, nhưng nó không phải là điều duy phải suy xét khi nói đến hiệu năng tổng thể.',problem_title7: '<br/> Tổng kết <br/>',
            problem10:'Tóm lại, RAM, SSD và card đồ họa là những thứ quan trọng nhất bạn cần nâng cấp để cải thiện hiệu suất trên hệ thống của mình. Bạn có thể sẽ thấy các cải tiến tức thời về mặt hiệu năng sau khi tiếp hành nâng cấp. Nhưng cũng đừng quá mong đợi ở một sự toàn diện đến kỳ diệu. Sẽ luôn có một “nút thắt cổ chai” trong hệ thống của bạn. Ngay sau khi bạn thay thế một bộ phận mà bạn cho là chậm nhất, một cái gì đó có vẻ yếu hơn lại sẽ dần xuất hiện. Khi đó, vấn đề quan trong trọng lại nằm ở chỗ quyết định xem liệu bạn nên nâng cấp một phần hay mua một hệ thống hoàn toàn mới thay thế. ',id:1,
            components:[ { link: require('../../Pictures/Ram/Bo-nho-DDR4-Adata-8GB-(2400)-AX4U240038G16-SRZ.jpg'),title:'RAM'},
                         { link: require('../../Pictures/VGA/Card-man-hinh-Asus-4GB-CERBERUS-GTX1050TI-O4G.png'),title:'VGA'},
                         { link: require('../../Pictures/Hardware/O-cung-HDD-WD-6TB-WD6003FZBX-Sata-3.jpg'),title:'Hardware'},
                         { link: require('../../Pictures/CPU/Bo-vi-xu-ly-CPU-Pentium-Dual-Core-G4600.jpg'),title:'CPU'}]},
            { solution: 'Mua máy tính mới <br/> Tắt chương trình khởi động cùng window <br/> phải phóng ổ cứng <br/> Làm mát máy tính <br/> Diệt virus',problem1:'Vậy nguyên nhân gây ra tình trạng đó ở đâu? Hãy cùng Phong Vũ tìm hiểu những nguyên nhân chính gây ra tình trạng này cũng như tìm hiểu về cách khắc phục nhé.',
            problem2:'Muốn cải thiện, tăng tốc hiệu suất cho máy tính thì có rất nhiều cách, nhưng điều trước tiên cần phải tìm hiểu đó là xem xét nguyên nhân nào dẫn đến tình trạng máy chạy “ì ạch”, thậm chí nhiều lúc còn đơ gây ra cảm giác rất khó chịu.',
            
            problem_title1:'1. MÁY TÍNH BẠN ĐANG SỬ DỤNG ĐÃ QUÁ CŨ',

            problem3:'Nguyên nhân đầu tiên mà Phong Vũ muốn nhắc đến chính là việc có nhiều người sử dụng những chiếc máy tính đời cũ. Việc sử dụng những chiếc máy như vậy trong thời gian dài đồng nghĩa với việc những linh kiện phần cứng của máy đã xuống cấp, khiến hiệu suất sử dụng của máy cũng giảm theo. ',
            problem4:'Ngày nay, với sự phát triển của công nghệ, những dòng máy tính đang ngày càng được cải thiện hơn về tính năng, hiệu suất sử dụng và độ bền mà giá thành thì không quá cao. Cho dù thế thì đối với nhiều người, đôi khi họ không có đủ điều kiện để trang bị một chiếc máy tính hoàn toàn mới mà thay vào đấy, họ chỉ đủ tiền để mua sắm những linh kiện mới. Đặc biệt là những ai sử dụng laptop đã cũ mà không có khả năng để sắm một chiếc laptop mới hoàn toàn, hãy đọc bài viết Những điều cần biết về nâng cấp laptop ở đây để biết thêm cách nâng cấp, thay thế những linh kiện mới cho chiếc laptop của mình mà không nhất thiết phải mua máy mới.',problem_title2 :'<br/> 2. HỆ THỐNG KHỞI ĐỘNG CHẬM',
            
            problem5:'Việc khởi động Windows sẽ mất một khoảng thời gian nhất định cho dù máy tính tính của bạn cấu hình mạnh hay yếu. Tuy nhiên, các ứng dụng và trình điều khiển cho phép tự động khởi chạy khi bật máy sẽ tạo sự khác biệt trong thời gian khởi động của từng hệ thống. Quá nhiều ứng dụng, hoặc có các ứng dụng nặng được đặt chế độ tự động khởi chạy khi bật máy sẽ làm máy tính của bạn chậm đi đáng kể. Để tăng tốc máy tính, đây là vấn đề mà bạn cần phải lưu ý và nên khắc phục ngay.'+
            
            'Cách tắt bớt các ứng dụng tự động khởi động khi bật máy'+
            
            'Đầu tiên, bạn nhấn tổ hợp phím Windows + R để mở hộp thoại Run. Sau đó, gõ lệnh msconfig.',
            problem6:'Lúc này, sẽ hiện ra cửa sổ System Configuration rồi chọn mục Startup. Sau đó, tích vào chuơng trình nào muốn tắt và chọn vào Disable all, sau đó nhấn Apply.',
            problem7:'Đấy là đối với Windows 7, còn với Windows 8,8.1 và 10 thì bạn mở mục Startup trong Task Manager. Chọn chương trình mà bạn muốn tắt rồi ấn Disable.',
            problem_title3:'3. Ổ ĐĨA CỨNG MÁY TÍNH BỊ PHÂN MẢNH ',

            problem8:'Đây là nguyên nhân rất phổ biến khiến máy tính bị chạy chậm. Nếu bạn thường xuyên truy xuất dữ liệu từ ổ đĩa, rất có thể ổ đĩa của bạn đã bị phân mảnh.',
            problem9:'Nhưng phân mảnh ổ cứng là gì thì muốn hiểu rõ về vấn đề này, bạn cần phải có kiến thức về chia sẻ dữ liệu và cấu tạo của ổ cứng. Bạn chỉ cần hiểu nôm na như thế này, phân mảnh ổ cứng là hiện tượng dữ liệu bị phân tán không theo thứ tự. Điều này có nghĩa,  sau một thời gian sử dụng thì các dữ liệu trên ổ đĩa cứng không được sắp xếp một cách hợp lý và khi muốn sử dụng các dữ liệu này, hệ thống sẽ mất nhiều thời gian để tìm và truy xuất ra các dữ liệu đó cho bạn.'+
            
            'Để khắc phục điều này, bạn có thể sử dụng các phần mềm chống phân mảnh ổ cứng như Smart Defrag hoặc Defraggler. Ngoài ra, bạn có thể sử dụng tính năng chống phân mảnh của chính Windows để khắc phục tình trạng này, bằng cách click chuột phải vào biểu tưởng ổ cứng cần chống phân mảnh, chọn Properties > Tools > Defragment Now.',
            
            problem_title4: '4. Ổ CỨNG BỊ ĐẦY',
            
            problem10:'Lại thêm một nguyên nhân đến từ chiếc ổ cứng của bạn khiến máy tính chạy chậm. Nếu ổ cứng của bạn chứa quá nhiều dữ liệu thì điều dễ nhận thấy nhất là việc truy cập vào ổ cứng thôi cũng đã mất nhiều thời gian rồi.',
            problem11:'Nếu ổ cứng đầy, nó sẽ có màu đỏ như ảnh trên và việc bạn cần làm là ngồi xem trong ổ cứng của mình có dữ liệu nào không quan trọng hoặc không cần thiết thì hãy xóa nó đi, tạo vùng không gian trống càng nhiều càng tốt cho ổ cứng để có thể tăng tốc cho máy tính.'+
            
            'Một lưu ý rằng nhiều người có quen thói quen lưu trữ dữ liệu vào ổ C – ổ chứa hệ thống. Đây không phải là một thói quen tốt nếu bạn không muốn máy bạn đã chậm thì lại càng chạy chậm hơn. Vì khi ổ C càng đầy nhanh, thì tốc độ xử lý của máy càng chậm hơn so với việc để khoảng không gian lớn cho ổ C.',
            
            problem_title5:'5. PAGEFILE CẤU HÌNH KHÔNG ĐÚNG',
            
            problem12:'Pagefile là một tập tin trên ổ cứng, được Windows sử dụng làm bộ nhớ ảo để lưu trữ các chương trình và dữ liệu, khi bộ nhớ RAM không đủ chỗ chứa. Do đó, nếu bị cấu hình sai, máy tính có thể sẽ hoạt động chậm hoặc thỉnh thoảng hiện thông báo lỗi.'+
            
            'Thông thường Windows sẽ tự điều chỉnh Pagefile sao cho tốt nhất, tuy nhiên đôi khi dung lượng của Pagefile không được tăng một cách tương ứng với các ứng dụng nặng nên thỉnh thoảng có thể sinh lỗi.'+
            
            'Cách khắc phục vấn đề này cũng khá đơn giản. Bạn chỉ cần thực hiện vài thao tác sau là được.'+
            
            'Đầu tiên, bạn chuột phải vào My Computer > Properties',
            problem13:'Tiếp theo, bạn chọn Advance > Performance > Settings ',
            problem14:'Tiếp tục vào phần Advance > Change > Bỏ dấu tích ở dòng đầu tiên > Custom size. Ở phần Custom size bạn nên điền dung lượng lớn hơn khoảng 1,5 lần so với dung lượng RAM của mình. Sau đó nhấn OK là xong.',
            problem_title6:'6. XÓA BỎ BỚT FILE TẠM (TEMP FILE)',
            
            problem15: 'Temp File là những file được tạo ra trong quá trình sử dụng của một số ứng dụng hay trong quá trình duyệt web để giúp người dùng có thể sử dụng, truy cập một cách nhanh hơn. Một điều đáng nói là sau khi các chương trình, ứng dụng hay trình duyệt web đã tắt đi sau khi sử dụng thì Windows lại không xóa những temp file đó đi. Cứ như thế, sau một thời gian sử dụng, nếu bạn không xóa bớt những file tạm này đi thì nó sẽ chiếm khá nhiều dung lượng của máy gây ra tình trạng lãng phí không gian sử dụng, dẫn tới máy tính bị chậm hẳn đi.'+
            
            'Để xóa những file tạm này bạn có thể sử dụng một số phần mềm chuyên dụng như CCleaner, Temp file Cleaner hoặc sử dụng ngay phần mềm chuyên dọn những file tạm của Windows đó là Disk Cleanup, được mở bằng cách gõ lệnh cleanmgr.exe vào hộp thoại Run.',
            problem_title7:'7. SỬ DỤNG CÁC PHẦN MỀM DIỆT VIRUS',
            
            problem16:'Virus máy tính thì ai cũng biết, nhưng phần mềm diệt Virus thì nó lại phức tạp hơn bạn nghĩ. Dù chức năng chính của những phần mềm này là diệt Virus cho máy tính nhưng đây cũng là nguyên nhân chính khiến máy tính của bạn chạy chậm hẳn đi. Lí do vì hầu hết các phần mềm diệt virus khi sử dụng, chúng đều chiếm khá lớn tài nguyên của máy.',
            problem17:'Do đó, bạn nên kiểm tra lại tình trạng của nó nếu chiếm dụng quá nhiều Ram và CPU, bạn hãy tạm thời tắt chúng đi, hoặc nếu tình trạng chậm máy thường xuyên thì điều tốt nhất là nên gỡ những phần mềm đấy đi. Và điều quan trọng hơn là máy bạn có bị nhiễm những mã độc hay virus các thứ thì nó phụ thuộc vào thói quen sử dụng máy tính của bạn.',
            
            problem_title8: '8. HÃY LÀM MÁT MÁY TÍNH KHI DÙNG',
            
            problem18:'Khi sử dụng máy tính, một điều tất nhiên là máy sẽ tỏa ra hơi nóng phụ thuộc vào bạn dùng nhiều hay ít tác vụ. Điều bạn cần làm ở đây là cố gắng phân tán sự tỏa nhiệt của máy bằng cách nâng cấp bộ phận tản nhiệt của case máy tính bàn, sử dụng đế tản nhiệt đối với laptop (lưu ý đừng để laptop lên chăn gối hay thứ gì đấy che hết phần tỏa nhiệt của máy).',
            problem19:'Máy tính sẽ hoạt động chậm hơn rất nhiều nếu tản nhiệt không tốt. Điều này không chỉ ảnh hưởng đến hiệu suất của máy mà còn làm giảm tuổi thọ của chúng, mà như thế thì máy bạn sẽ nhanh trở thành máy cũ hơn so với những máy có tản nhiệt tốt.',id:2,
             components:[ { link: require('../../Pictures/Radiator/Quat-CPU-Gigabyte-Aorus-ATC700.png'),title:'Radiator'},
                          { link: require('../../Pictures/Computer/May-tinh-xach-tay-Laptop-Acer-Predator-Helios-300-G3-572-79S6.jpg'),title:'Computer'}]},
        
            { problem1: 'Laptop bị nóng khi sử dụng là tình trạng xảy ra khá phổ biến mà nhiều người dùng gặp phải bởi vậy khắc phục tình trạng laptop bị nóng là một điều cần thiết.',
            problem2:'Hướng khắc phục tình trạng laptop bị nóng'+
            'Laptop nóng gây khó chịu trong quá trình sử dụng, làm hư hại các thiết bị phần cứng bên trong máy, nhất là đối với trường hợp Laptop bị nóng ở ổ cứng, Laptop bị nóng tắt đột ngột, laptop bị treo máy do nóng... Dưới đây là một số phương pháp đơn giản mà bạn có thể sử dụng để khắc phục tình trạng này.',problem_title1:' <br/> 1. Vệ sinh Laptop, trét keo tản nhiệt cho CPU <br/>',problem3: 'Đây là phương pháp cơ mà các chuyên viên kỹ thuật thường làm để khắc phục tình trạng laptop hoặc ổ cứng laptop bị nóng. Bạn có thể mang laptop đi vệ sinh hoặc tự mình tháo máy ra vệ sinh thổi vụi và trét lại keo tản nhiệt cho CPU để làm cho máy mát, sạch hơn giúp cho máy giảm thiểu tình trạng nóng máy. <br/>',problem_title2: '2. Lắp thêm quạt tản nhiệt ngoài <br/>',problem4: 'Một số laptop có khe thoát nhiệt rất nhỏ và hoạt động trong thời gian dài sẽ gây ra tình trạng nóng máy. Giải pháp ở đây là lắp thêm quạt tản nhiệt ngoài để giúp cho quá trình thải khí nóng ra ngoài được tốt hơn. <br/>',problem_title3: '3. Hạn chế vừa sạc Pin vừa sử dụng <br/>',problem5: 'Trong quá trình sử dụng máy nên hạn chế vừa sạc Pin vừa sử dụng vì vừa sạc Pin vừa sử dụng máy sẽ nảy sinh nhiệt lượng trao đổi giữa quá trình nạp điện vào Pin và sử dụng năng lượng từ Pin qua máy do đó rất dễ gây nên tình trạng nóng máy. Tốt nhất nên sài Pin hoặc tháo Pin ra khi cắm sạc để sử dụng, hạn chế nảy sinh nhiệt lượng làm nóng cho máy. <br/>',problem_title4: '4. Sử dụng trong thời gian dài khiến laptop bị nóng <br/>',problem6: 'Điều này các bạn gặp phải khá nhiều vì thời gian làm việc cũng như giải trí trên laptop chiếm đến 70 – 80% thời lượng sử dụng laptop. Nếu sử dụng trong một thời gian dài laptop sẽ sinh nhiệt lượng là làm nóng máy do đó tốt nhất nên sử dụng hợp lý và cho laptop một thời gian nghỉ ngơi nhất định tránh làm nóng máy quá lâu ảnh hưởng đến linh kiện trong máy. <br/>',problem_title7:'5. Hạn chế làm cho CPU quá tải <br/>',problem7: 'Laptop bị treo máy do nóng, một phần là do CPU làm việc quá tải. Có thể hiệu khối lượng công việc mà máy cần xử lý càng nhiều thì nhiệt lượng tỏa ra trên máy càng lớn. Vì vậy để máy không bị nóng quá thì nên giảm các chương trình mà máy cần phải xử lý. Hãy giải quyết những chương trình theo thứ tự cần thiết khác nhau, việc nào cần trước thì nên xử lý trước, việc nào không cần kíp thì xử lý sau. Tránh việc mở một lúc quá nhiều chương trình trên máy khiến máy nóng, dễ bị treo, đôi khi còn làm biến mất những dữ liệu của bạn. <br/>',problem_title6: '6. Sử dụng máy trong môi trường mát mẻ <br/>',problem8: 'Sử dụng laptop trong môi trường mát mẻ là cách đơn giản để khắc phục tình trạng laptop bị nóng, đây là cách giúp chiếc laptop của bạn giảm thiểu khả năng sinh nhiệt vì không gian mát mẻ cũng giúp laptop dược tản nhiệt một cách tự nhiên mà không cần bất cứ phương pháp tản nhiệt nào khác. <br/>',solution:'Vệ sinh Laptop, trét keo tản nhiệt cho CPU <br/> Lắp thêm quạt tản nhiệt ngoài <br/> Hạn chế vừa sạc Pin vừa sử dụng <br/> Tránh sử dụng quá lâu <br/> Hạn chế làm cho CPU quá tải <br/> Sử dụng máy trong môi trường mát mẻ',id:3,
            components:[]},

            { solution: 'Thay thế bằng các linh kiện mới',problem_title1:'Bo mạch chủ <br/>',problem1: 'Về mặt kỹ thuật, bất kỳ sản phẩm nào cấu tạo từ những thành phần có nguyên lý quay cơ học khi hoạt động sẽ dễ hư hỏng nhất vì tính chất tiếp xúc bề mặt vật lý dẫn đến sự hao mòn. Tuy nhiên, mặc dù không có bất kỳ bộ phận chuyển động nào bên trong, nhưng bo mạch chủ máy tính (Mainboard) lại là một trong những thành phần dễ hư hỏng vì cấu tạo rất phức tạp và tinh tế trong thiết kế.'+
            'Do đó, ngay cả những trục trặc nhỏ nhất trên bo mạch chủ, dù cho đó là lỗi của nhà sản xuất hay lỗi phát sinh trong quá trình sử dụng, cũng có thể gây ra thảm họa. Theo công bố của các hãng sản xuất, một bo mạch chủ thường có tuổi thọ khoảng 3-4 năm. Nếu sản phẩm nào dùng lâu hơn mức đó thì bạn nên cho đó là điều may mắn. <br/> Một trong những lý do lớn nhất khiến bo mạch chủ bị hỏng chính là các tụ trên đó bị “lão hóa” theo thời gian, hoặc đôi khi chúng bị rò rỉ. Tuy nhiên, việc phát hiện và thay thế những linh kiện loại này không phải ai cũng tự làm được. Những nguyên nhân khác khiến bo mạch chủ bị hỏng cần được kể đến là nhiệt độ, độ ẩm và từ tính của môi trường xung quanh. <br/> Chính vì vậy, để bo mạch chủ có thể “sống” lâu hơn, tốt nhất là bạn nên đặt máy tính của mình ở nơi không có các mối nguy hại về môi trường như độ ẩm quá mức hoặc không khí quá khô, có thể thúc đẩy sự tích tụ tĩnh điện. Nhiệt độ quá nóng đôi khi có thể khiến bo mạch chủ bị nứt, dẫn đến đoản mạch và các linh kiện trên đó bị hỏng. Một điều nữa cần lưu ý là không bao giờ chạm vào bo mạch chủ cho dù nó đang hoạt động hay đã được tắt nguồn. Nếu buộc phải chạm vào bo mạch chủ để lắp đặt hoặc thay thế các bộ phận khác, hãy dùng vòng đeo tay chống tĩnh điện. <br/>',problem_title2: 'Ổ lưu trữ <br/>',problem2: 'Ổ lưu trữ hiện nay bao gồm hai loại: ổ đĩa cứng truyền thống HDD (hard-disk drive) và ổ lưu trữ thể rắn SSD (solid-state drive). Một máy tính cá nhân không thể hoạt động mà không có ổ lưu trữ (trừ một vài mẫu máy tính như Chromebook), bởi vì đó là nơi để cài đặt hệ điều hành cũng như để lưu trữ dữ liệu. Nếu ổ lưu trữ “chết”, bạn cần thực hiện ngay công việc thay thế càng sớm càng tốt. <br/> Về mặt kỹ thuật, HDD được cấu tạo từ các phiến đĩa (platter) bằng kim loại quay bằng motor cơ học nên hao mòn theo thời gian là điều khó tránh khỏi. Các phiến đĩa có thể bị trầy xước, đầu đọc có thể ngừng hoạt động, hoặc các bộ phận khác có thể bị "tê liệt" bởi sự đột biến điện áp. Trong khi đó, SSD sử dụng bộ nhớ flash để lưu trữ dữ liệu nên không có các thành phần quay cơ học. Tuy nhiên, ổ SSD cũng có những khuyết điểm chẳng hạn như nhạy cảm hơn với nhiệt độ khắc nghiệt và cúp điện cũng có thể dẫn đến hỏng dữ liệu. <br/> Vì vậy, cho dù máy tính của bạn đang sử dụng HDD hay SSD để lưu trữ dữ liệu, tốt nhất là nên đầu tư một thiết bị bảo vệ điện thật tốt để tránh tình trạng điện áp tăng vọt gây thiệt hại cho các linh kiện bên trong máy tính.'+
            'Ngoài ra, cũng nên lưu ý tránh đặt máy tính ở nơi có nhiệt độ cao. Điều này cũng có nghĩa là nên thường xuyên vệ sinh làm sạch bụi bên ngoài và bên trong máy tính để đảm bảo không khí lưu thông tốt và tránh bị quá nóng. Bên cạnh đó, nên thường xuyên dùng các phần mềm công cụ chuyên dụng để kiểm tra ‘sức khỏe’ ổ cứng hay ổ SSD để có thể phát hiện vấn đề kịp thời. <br/>',problem_title3: 'RAM <br/>',problem3: 'Bộ nhớ truy xuất ngẫu nhiên (RAM) là thành phần rất quan trọng trong máy tính. Đó cũng là một trong những phần đầu tiên bạn nên nâng cấp nếu muốn tăng tốc độ hiệu suất máy tính. <br/> Tuy nhiên, RAM cũng chính là một trong những linh kiện dễ hỏng nhất của máy tính. Tùy thuộc vào model và thương hiệu, tuổi thọ của các thanh RAM mà bạn mua có thể thay đổi và hiệu suất có thể ổn định hơn. RAM bị “chết” chính là một trong những điều phổ biến mà hầu hết người dùng nghĩ đến khi máy tính mở không lên. <br/> Có hai nguyên nhân có thể giết chết một thanh RAM đang hoạt động tốt chỉ trong một cái chớp mắt: đó là nhiệt độ và điện áp. Theo công bố, nhiệt độ vận hành của RAM là giữa khoảng 0 độ C và 85 độ C. RAM sẽ bị lỗi hoặc hỏng hoàn toàn nếu nhiệt độ hoạt động nằm ngoài phạm vi đó. Do đó, nên lưu ý đặt máy tính ở nơi có nhiệt độ phù hợp và thường xuyên vệ sinh máy tính để tránh tình trạng các thiết bị quá nóng. <br/> Đối với nguyên nhân điện áp gây hỏng RAM, hiện tượng điện áp tăng vọt có thể xuất hiện từ bo mạch chủ bị lỗi hay nguồn điện không ổn định. Để tránh tình trạng trên, nên đầu tư một thiết bị bảo vệ điện thật tốt để máy tính luôn được cung cấp nguồn điện ổn định. Ngoài ra, điều quan trọng nhất khi mua RAM là nên chọn những sản phẩm chất lượng cao từ các nhà sản xuất có uy tín. <br/>',problem_title4:'Bộ nguồn<br/>',problem4: 'Bộ nguồn máy tính (PSU) là thiết bị cung cấp điện năng cho tất cả các thành phần bên trong máy tính. Nói chung, bộ nguồn không phải là yếu tố quan trọng được nhiều người để ý như bộ xử lý CPU, bộ nhớ RAM, ổ lưu trữ HDD/SSD và card đồ họa, nhưng nó cũng là một thành phần không kém quan trọng mà bạn hoàn toàn không thể bỏ qua. Bộ nguồn có thể ảnh hưởng đến mọi bộ phận trong hệ thống máy tính và thường là nguyên nhân gây hỏng hóc cho bất kỳ linh kiện nào trong những trường hợp nguồn điện bị dao động. <br/> Về tuổi thọ, một bộ nguồn thông thường trung bình có thể sử dụng ít nhất 5 năm, hay thậm chí có thể lên đến 10 năm nếu may mắn. Nhưng nếu bạn thường gắn máy tính vào nguồn cung cấp điện có tải trọng cao trong thời gian dài thì bộ nguồn máy tính sẽ luôn gặp áp lực, dẫn đến tuổi thọ ngắn hơn.'+
            'Do đó, có một số cân nhắc mà bạn cần lưu ý khi chọn mua bộ nguồn phù hợp nhất với nhu cầu của mình. Như mọi khi, hãy chọn một bộ nguồn chất lượng cao từ thương hiệu có uy tín. Rất nhiều model nói chung là được đánh giá cao nhưng lại không có nhiều khả năng chịu áp lực khi sử dụng ở nơi nguồn điện không ổn định. Bộ nguồn kém chất lượng có thể bị lão hóa nhanh hơn và sớm hỏng hơn. <br/>',problem_title5: 'Quạt tản nhiệt <br/>',problem5: 'Có lẽ nhiều người trong chúng ta đã không đề cao đúng mức tầm quan trọng của quạt tản nhiệt máy tính hoặc thậm chí hoàn toàn không quan tâm đến chúng. Về mặt kỹ thuật, quạt tản nhiệt sẽ quay khi bạn cần làm mát máy tính (khi máy tính hoạt động với công suất cao để chạy các ứng dụng “nặng”), hoặc quạt sẽ ngưng khi bạn không cần nó (khi máy tính ở chế độ ngủ hoặc chạy các ứng dụng “nhẹ”). Đôi khi, bạn có thể thậm chí không nhận ra khi một trong số quạt tản nhiệt đã ngừng hoạt động. <br/> Trong máy tính, quạt tản nhiệt thường dùng để làm mát bộ xử lý CPU, card đồ họa GPU hay thùng máy. Do đó, hãy tưởng tượng quạt tản nhiệt đột ngột ngừng hoạt động thì các thành phần khác sẽ bị ảnh hưởng như thế nào. Hoặc nếu trong trường hợp bạn chọn mua quạt tản nhiệt giá rẻ, không tương thích với CPU hay GPU cao cấp trong máy tính của mình thì liệu các thành phần kia có hoạt động ổn định được không.'+
            'Quạt tản nhiệt cũng hoạt động với cơ chế quay cơ học nhưng thực sự đơn giản hơn nhiều so với các thành phần khác. Qua một thời gian sử dụng, quạt có thể bị hỏng vì khô dầu, bám bụi hoặc hư motor. Do đó, để đảm bảo quạt tản nhiệt hoạt động hiệu quả hơn và có tuổi thọ cao hơn, bạn nên thường xuyên làm vệ sinh bụi bặm trên quạt hay bên trong thùng máy. Ngoài ra, cũng nên kiểm tra và thay thế quạt đã quá cũ để tránh tình trạng quạt hỏng đột ngột dẫn đến cháy CPU hay GPU.',id:4,
            components:[ { link: require('../../Pictures/Hardware/O-cung-HDD-WD-6TB-WD6003FZBX-Sata-3.jpg'),title:'Hardware'},
                         { link: require('../../Pictures/Radiator/Quat-CPU-Gigabyte-Aorus-ATC700.png'),title:'Radiator'},
                         { link: require('../../Pictures/Ram/Bo-nho-DDR4-Adata-8GB-(2400)-AX4U240038G16-SRZ.jpg'),title:'RAM'}]},

            { solution: '',problem1:'Trong quá trình sử dụng máy tính chạy hệ điều hành Windows thì việc gặp lỗi là gần như không thể tránh khỏi, không bị lỗi nọ thì bị lỗi kia. Nói chung là rất khó tránh khỏi việc bị lỗi khi sử dụng máy tính khi sử dụng hệ điều hành của Microsoft. Máy tính MAC chạy mac OS thì mình không biết thế nào chứ máy  tính chạy Windows thì hay bị lỗi lắm. <br/> Chính vì thế mà trong bài viết này blogchiasekienthuc.com sẽ chia sẻ với các một số nguyên nhân và cách khắc phục một số lỗi thường gặp trên Windows, vì là có rất nhiều lỗi nên mình sẽ chia ra làm nhiều phần nhé. Ở phần 1 này mình sẽ hướng dẫn các bạn cách khắc phục lỗi như màn hình xanh, không vào được mạng, không cài được phần mềm…. <br/>',problem_title1: 'Lỗi 1:  Màn hình xanh chết chóc <br/>',problem2: 'Màn hình xanh – lỗi trên Windows XP và Windows 7 có giao diện như hình bên dưới.'+

            'Lỗi màn hình xanh chết chóc'+
            'Lỗi màn hình xanh chết chóc'+
            'Màn hình lỗi trên Windows 8 và Windows 8.1 và Windows 10 có giao diện như hình dưới.'+
            'Lỗi màn hình xanh trên Windows 8'+
            'Lỗi màn hình xanh trên Windows 8'+
            'Nguyên nhân gây ra lỗi màn hình xanh thì rất nhiều, có thể liên quan đến phần cứng, liên quan đến phần mềm. Mình có thể liệt kê ra một số nguyên nhân chính như sau:'+
            'Do Driver không tương thích với máy tính hoặc do bạn cài nhầm Driver của phiên bản Windows khác.'+
            'Do thanh Ram và khe cắm RAM của bạn bị bẩn hoặc khe cắm RAM bị lỗi. Bạn có thể tháo ram máy tính ra và lau lại thanh Ram và khe cắm ram sau đó thử cắm lại (sử dụng cục tẩy chà sạch lên nơi tiếp xúc giữa ram và khe ram). Bạn có thể sử dụng phần mềm memtest86+ trong Hiren Boot để test nhé.'+
            'Do bản Windows bị bạn bị lỗi, bạn có thể cài bản windows khác xem sao.'+
            'Do xung đột phần mềm, bạn thử gỡ phần mềm cài gần đây nhất, và lưu ý là không nên sử dụng 2 trình diệt virus nhé, rất dễ xảy ra xung đột.'+
            'Do Virus gây ra, bạn thử vào Mini Windows để quét sạch sẽ Virus nhé. Bạn có thể sử tạo một chiếc usb boot đầy đủ chức năng để làm việc này.'+
            'Do ổ cứng của bạn đã bị Bad Sector, bạn có thể kiểm tra theo hướng kiểm tra ổ cứng có bị Bad Sector hay không mà mình đã viết trước đó. Một khi đã bị lỗi này thì bạn chỉ còn cách mua ổ cứng mới, vì nếu cố tình sử dụng ổ cứng của bạn sẽ die bất cứ lúc nào và bạn sẽ mất hết dữ liệu.'+
            'Do hiện tượng “thắt nút cổ chai” tức là một thành phần trong máy tính của bạn không xử lý theo kịp các thành phần khác kéo theo làm chậm toàn bộ hệ thống. Mình lấy ví dụ thế này, trong máy tính có nhiều thành phần linh kiện như CPU, RAM, VGA, HDD.. mỗi cái có một tốc độ mạnh, yếu khác nhau. Khi bạn chạy một ứng dụng hay gải quyết một vấn đề nào đó thì mỗi bộ phần sẽ làm nhiệm vụ của mình. Nếu một bộ phận bị yếu thì kéo theo tất cả các bộ phận khác phải chờ để bộ phận yếu này xử lý xong công việc của mình dẫn đến việc thắt nút cổ chai. <br/>',problem_title2: 'Lỗi 2: Không cài đặt được ứng dụng, phần mềm <br/>',problem3: 'Nguyên nhân là do bạn đặt tên thư mục của mình là Tiếng Việt, nhiều phần mềm sẽ không hiểu nên không thể cài đặt được.'+      
            'Cách xử lý là bạn Rename lại tên thư mục đó không dấu nhé. <br/>',problem_title3: 'Lỗi 3: Máy tính bị mất mạng Internet',problem4: 'Dấu X đỏ xuất hiện thì chắc chắn không còn 1 chút tín hiệu nào, kể cả mạng LAN cũng bị mất. Để khắc phục tình trạng này bạn làm như sau:'+
            'Kiểm tra lại xem có bị lỏng dây mạng không, hoặc dây mạng có bị đứt hoặc bị tuột chỗ bấm hạt mạng không, bạn có thể thử cắm vào một đầu dây mạng khác nếu vẫn không được thì thực hiện tiếp.'+
            'Kiểm tra modem, hub có lên nguồn không và đèn tín hiệu có sáng không, kiểm tra dây đã cắm vào Switch, router, modem chưa.'+
            'Kiểm tra xem máy tính bạn đã đủ Driver chưa bằng cách nhấn chuột phải vào Computer (This PC) => Manager => Device Manager . (Dấu chấm than vàng tức là máy tính bạn đang thiếu driver nhé). Cách sử lý là tải và cài đặt driver cho máy tính, bạn có thể sử dụng Easy DriverPack để cài. <br/>',problem_title4: 'Lỗi 4: Mạng bị dấu chấm than vàng',problem5: 'Đã có một bài viết rất chi tiết cho các bạn cách khắc phục lỗi chấm than vàng ở biểu tượng mạng cho các bạn. Xem hướng dẫn tại bài viết : Lỗi mạng chấm than vàng và cách khắc phục thành công 100% <br/>',problem_title5: 'Lỗi 5: Bỏ thông báo, tin nhắn dưới góc phải màn hình <br/>',problem6: 'Đây thực ra không phải là lỗi mà là một thông báo của hệ thống khi bạn tắt tưởng lửa Windows, tắt Windows Update hoặc nhắc nhở bạn Backup dữ liệu để tránh rủi do. Nhưng thực chất nó đang gây khó chịu cho người dùng, để loại bỏ thông báo này bạn làm như sau:',
            problem7:'Nhấn vào Open Action Center nó có cái dòng Turn off hoặc hide thì click vào ví dụ như thế này:',
            problem8:'Tắt hoàn toàn thông báo của Action Center'+
            'Hoặc nếu như bạn muốn tắt hoàn toàn thông báo của Action Center đi thì có thể làm như sau:'+
            'Thực hiện: Vào Control Panel (xem ở chế độ Large icons cho dễ tìm) sau đó chọn Notification Area Icons  => tiếp theo chọn Turn system icons on or off'+
            'Turn system icons on or off'+
            'Turn system icons on or off'+
            'Tại mục Action Center, bạn lựa chọn là off => nhấn OK để thực hiện. Vậy là từ nay sẽ không có bất cứ thông báo nào của Action Center nữa. <br/>',problem_title6:  'Lỗi 6. Mất chức năng Manager trong Menu chuột phải (Windows 7) <br/>',problem9: 'Nguyên nhân: Không rõ'+
            'Cách khắc phục:'+
            'Mở hộp thoại RUN bằng cách nhấn tổ hợp phím Windows + R => nhập lệnh regedit => và nhấn Enter.'+
            'Tìm theo đường dẫn: HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell\Manage\command'+
            'Trong đó có 1 file reg có tên là Default. Bạn click chuột phải và chọn Modify... , sau đó thay dòng lệnh cũ bằng dòng này %SystemRoot%\system32\mmc.exe %SystemRoot%\system32\CompMgmt.msc. Nếu vẫn không được thì Repair lại Windows nhé. <br/>',problem_title7: 'Lỗi 7: Lỗi Icon bị phóng to khi thoát Game <br/>',problem10: 'Trước kia mình có hay chơi game FiFa, đột kích và rất hay gặp lỗi này. Nguyên nhân là do khi bạn chơi Game, máy tính tự động thay đổi Resolution (độ phân giản màn hình) khi bạn chơi, nhưng sau khi thoát Game ra nó không trả lại Resolution mặc định của máy tính.'+
            'Cách sửa lỗi: Chỉnh lại độ phân giải cho máy tính. (Nhấn chuột phải vào Desktop => chọn Screen resolution và đặt lại độ phân giải).'+
            'Hoặc..'+
            'Vào Control Panel => chọn Hardware and Sound => chọn Display => chọn Adjust Resolution … chọn độ phân giải resolution nào có chữ (recommended).'+
            'Nếu như laptop của bạn sử dụng video chipset của Intel thì mở Utility của nó ra, trong phần Display Setting bạn chú ý đến mục Aspect Ratio Option => chọn Full Screen (no border) thay vì Center Image nhé.'+
            'Note: Nếu bạn vẫn chưa hiểu cách làm thì có thể xem lại bài hướng dẫn cách thay đổi độ phân giải màn hình máy tính mà mình đã hướng dẫn rất chi tiết trước đó nhé. <br/>',problem_title8: 'Lỗi 8. Không cài được .Net Framework <br/>',problem11: 'Nguyên nhân của lỗi này là do bạn chưa cài các phiên bản cũ .Net Frameword 2, 3, 3.5. Bởi vì ứng dụng này không có tính kế thừa, nên khi cài bản Net frameword 4 thì những tính năng trên bản 2,3.. sẽ không có.'+
            'Cách khắc phục: Download Microsoft .NET Framework đầy đủ phiên bản'+
            'Bạn hãy tải và cài đặt Net Frameword nhé ! <br/>',dataProblem_Title9: 'Lỗi 9: Windows Explorer has stopped working” hay “Windows Installer has stopped working”. <br/>',problem12: 'Lỗi này chúng ta thường gặp trên Windows 7, khi bạn cài đặt, remove ứng dụng hoặc có thể do bạn update windows…',
            problem13:'Windows Explorer has stopped working'+
            'Windows Explorer has stopped working'+
            'Trong trường hợp này nếu như bạn nhấn vào Debug hoặc Close program thì tất cả các dữ liệu trong ứng dụng đó sẽ bị mất hết. Vì vậy cách khắc phục vấn đề này là vô hiệu hóa thông báo trên, bạn làm như sau:'+
            'Mở hộp thoại RUN (Windows + R) => nhập lệnh regedit và nhấn Enter.'+
            'Tìm đến khóa HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/QMClient/Windows/DisabledSessions',
            problem14:'Tìm khung số (1) mình đã khoanh đỏ bạn xem nếu có khóa MachineThrottling, thì xóa nó đi. Cuối cùng  chúng ta khởi động lại máy tính để hoàn thành.'+
            'Mình mới bổ sung thêm bài viết về cách sửa lỗi này, bạn có thể tham khảo rõ hơn tại bài hướng dẫn: 5 cách sửa lỗi “Has stopped working” trên Windows 7/ 8/ 10',id:5,
            components:[]}, 
                         
          ],
          activeSlide:0,
          dataProblem1:null,
          dataProblem2:null,
          dataProblem3:null,
          dataProblem4:null,
          dataProblem5:null,
          dataProblem6:null,
          dataProblem7:null,
          dataProblem8:null,
          dataProblem9:null,
          dataProblem10:null,
          dataProblem11:null,
          dataProblem12:null,
          dataProblem13:null,
          dataProblem14:null,
          
          dataSolution:null,

          dataProblem_Title1:null,
          dataProblem_Title2:null,
          dataProblem_Title3:null,
          dataProblem_Title4:null,
          dataProblem_Title5:null,
          dataProblem_Title6:null,
          dataProblem_Title7:null,
          dataProblem_Title8:null,
          dataProblem_Title9:null,
          dataProblem_Title10:null,
          dataProblem_Title11:null,
          dataProblem_Title12:null,
          dataProblem_Title13:null,
          dataProblem_Title14:null,

          dataTitle:[],
          dataID:0,
          dataComponents:null,

        }
    }
    componentDidMount(){
        readdata();
    }
    _renderItem_HP ({item, index}) {
        return (
          <View style={{flexDirection:'column',paddingLeft:5}}>     
              <Image source={item.link} 
                    style={{width: 200, height: 200}} />
              <Text>{item.title}</Text>
          </View>
      );}

    renderItem_1= () => {
        return(
        <View>
            <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5, alignItems: 'center',flexWrap:"wrap" }}>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem1}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh.jpg')} />
                </View>
                <View style={{alignSelf:'flex-start',paddingRight:15}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title1}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem2}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh2.jpg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem3}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title2}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh3.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem4}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title3}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh4.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem5}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh5.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem6}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title4}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh6.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem7}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title5}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh7.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem8}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title6}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/cai-thien-hieu-suat-may-tinh8.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem9}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title7}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem10}</Text>
                </View>
            </View>
            <View style={{borderColor:'black',borderWidth:3, flex:1 ,padding:5,marginTop:10 }}> 
                <Text style={{fontSize:14}}>{this.state.dataSolution}</Text>
            </View>
        </View>
        )
        }
    renderItem_2= () => {
        return(
        <View>
            <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5, alignItems: 'center',flexWrap:"wrap" }}>
                <View> 
                    <Text style={{fontSize:14}} >{this.state.dataProblem1}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/slow-computer.jpg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem2}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title1}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem3}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/recogida-ordenadores-segunda-mano.jpeg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem4}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title2}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem5}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Screenshot_2-7.png')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem6}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/a2-copy-copy-5bb91.png')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem7}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Untitled.png')} />
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title3}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem8}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/a3-5bb91.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem9}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title4}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem10}</Text>
                </View> 
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Hard-Drive-Full-pcmanpower.co_.uk_.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem11}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title5}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem12}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Screenshot_2-9.png')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem13}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Capture-7.png')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem14}</Text>
                </View>      
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Capture-9.png')} />
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title6}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem15}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/Screenshot_2-10.png')} />
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title7}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem16}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/viu_NQFC-1024x575.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem17}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title8}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem18}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/2/may-tinh-nong.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem19}</Text>
                </View>
            </View>
            <View style={{borderColor:'black',borderWidth:3, flex:1 ,padding:5,marginTop:10 }}> 
                <Text style={{fontSize:14}}>{this.state.dataSolution}</Text>
            </View>
        </View>
        )
        }
    renderItem_3= () => {
        return(
        <View>
            <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5, alignItems: 'center',flexWrap:"wrap" }}>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem1}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/Huong-khac-phuc-tinh-trang-laptop-bi-nong.jpg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem2}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title1}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem3}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title2}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem4}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title3}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem5}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title4}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem6}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title5}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem7}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title6}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem8}</Text>
                </View>
            </View>
            <View style={{borderColor:'black',borderWidth:3, flex:1 ,padding:5,marginTop:10 }}> 
                <Text >{this.state.dataSolution}</Text>
            </View>
        </View>
        )
        }
    renderItem_4= () => {
        return(
        <View>
            <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5, alignItems: 'center',flexWrap:"wrap" }}>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title1}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem1}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title2}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem2}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title3}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem3}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title4}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem4}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title5}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem5}</Text>
                </View>
            </View>
            <View style={{borderColor:'black',borderWidth:3, flex:1 ,padding:5,marginTop:10 }}> 
                <Text style={{fontSize:14}}>{this.state.dataSolution}</Text>
            </View>
        </View>
        )
        }
    renderItem_5= () => {
        return(
        <View>
            <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5, alignItems: 'center',flexWrap:"wrap" }}>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem1}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title1}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem2}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title2}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem3}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title3}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-3.jpg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem4}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title4}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem5}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title5}</Text>
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem6}</Text>
                </View>
                <View>
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-4.jpg')} />
                </View>
                <View> 
                    <Text style={{fontSize:14}}>{this.state.dataProblem7}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-5.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem8}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title6}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem9}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title7}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem10}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title8}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-6.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem11}</Text>
                </View>
                <View style={{alignSelf:'flex-start'}}> 
                    <Text style={{fontSize:30}} >{this.state.dataProblem_Title9}</Text>
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem12}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-8.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem13}</Text>
                </View>
                <View >
                    <Image style={{width: 300, height: 200, resizeMode:'contain'}} source={require('../../Pictures/News/loi-thuong-gap-tren-windows-9.jpg')} />
                </View>
                <View > 
                    <Text style={{fontSize:14}}>{this.state.dataProblem14}</Text>
                </View>
            </View>
            <View style={{borderColor:'black',borderWidth:3, flex:1 ,padding:5,marginTop:10 }}> 
                <Text >{this.state.dataSolution}</Text>
            </View>
        </View>
        )
        }
    renderItems= () => {
        switch (this.state.dataID) {
            case 1:
                return this.renderItem_1();
            case 2:
                return this.renderItem_2();
            case 3:
                return this.renderItem_3();
            case 4:
                return this.renderItem_4();
            case 5:
                return this.renderItem_5();
        }}
    render(){
        
        const itemId = this.props.navigation.getParam('id', 'NO-ID');
        const id=JSON.stringify(itemId);
        readdata=()=>{
            this.state.entries_HP.forEach(element => {
                if(element.id==id)
                {
                    data_problem=element.problem1;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem1:data_problem});

                    if(element.problem2!=null)
                    {data_problem=element.problem2;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem2:data_problem});}

                    if(element.problem3!=null)
                    {data_problem=element.problem3;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem3:data_problem});}
                    
                    if(element.problem4!=null)
                    {data_problem=element.problem4;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem4:data_problem});}
                    
                    if(element.problem5!=null)
                    {data_problem=element.problem5;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem5:data_problem});}

                    if(element.problem6!=null)
                    {data_problem=element.problem6;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem6:data_problem});}

                    if(element.problem7!=null)
                    {data_problem=element.problem7;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem7:data_problem});}

                    if(element.problem8!=null)
                    {data_problem=element.problem8;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem8:data_problem});}

                    if(element.problem9!=null)
                    {data_problem=element.problem9;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem9:data_problem});}
                    
                    if(element.problem10!=null)
                    {data_problem=element.problem10;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem10:data_problem});}

                    if(element.problem11!=null)
                    {data_problem=element.problem11;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem11:data_problem});}

                    if(element.problem12!=null)
                    {data_problem=element.problem12;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem12:data_problem});}

                    if(element.problem13!=null)
                    {data_problem=element.problem13;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem13:data_problem});}

                    if(element.problem14!=null)
                    {data_problem=element.problem14;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem14:data_problem});}

                    if(element.problem15!=null)
                    {data_problem=element.problem15;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem15:data_problem});}

                    if(element.problem16!=null)
                    {data_problem=element.problem16;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem16:data_problem});}

                    if(element.problem17!=null)
                    {data_problem=element.problem17;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem17:data_problem});}

                    if(element.problem18!=null)
                    {data_problem=element.problem18;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem18:data_problem});}

                    if(element.problem19!=null)
                    {data_problem=element.problem19;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataProblem19:data_problem});}


                    data_solution=element.solution;
                    data_solution = data_solution.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');
                    this.setState({dataSolution:data_solution});

                    if(element.problem_title1!=null)
                    {data_title=element.problem_title1;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title1:data_title});}

                    if(element.problem_title2!=null)
                    {data_title=element.problem_title2;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title2:data_title});}

                    if(element.problem_title3!=null)
                    {data_title=element.problem_title3;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title3:data_title});}

                    if(element.problem_title4!=null)
                    {data_title=element.problem_title4;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title4:data_title});}

                    if(element.problem_title5!=null)
                    {data_title=element.problem_title5;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title5:data_title});}

                    if(element.problem_title6!=null)
                    {data_title=element.problem_title6;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title6:data_title});}

                    if(element.problem_title7!=null)
                    {data_title=element.problem_title7;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title7:data_title});}

                    if(element.problem_title8!=null)
                    {data_title=element.problem_title8;
                    data_title = data_title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'\n');      
                    this.setState({dataProblem_Title8:data_title});}

                    this.setState({dataTitle:element.components});
                    this.setState({dataID:element.id});
                    
                }
                
            })
        }

        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container} >
                        {this.renderItems()}
                    </View>
                    <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5,marginTop:10 }}> 
                        <View style={{flex:1,backgroundColor:'white'}}>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.dataTitle}
                                renderItem={this._renderItem_HP}
                                hasParallaxImages={true}
                                sliderWidth={350}
                                sliderHeight={300}
                                itemWidth={240}
                            />
                        </View>
                    </View>
                </ScrollView>    
            </View>
        );
    }
}
export default DetailScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
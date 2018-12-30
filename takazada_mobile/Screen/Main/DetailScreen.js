import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity,Alert ,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Carousel, { ParallaxImage, Pagination }  from 'react-native-snap-carousel';

class DetailScreen extends React.Component{
    constructor() {
        super()
        this.state = {
          entries_HP: [
            { solution: 'RAM, SSD và card đồ họa là những thứ quan trọng nhất bạn cần nâng cấp để cải thiện hiệu suất trên hệ thống của mình. Bạn có thể sẽ thấy các cải tiến tức thời về mặt hiệu năng sau khi tiếp hành nâng cấp',problem:'Bạn có cảm thấy PC của mình đang chạy chậm không? Có thể bạn đã thử sử dụng những phần mềm tối ưu hóa và nghiên cứu đến tất cả các giải pháp phổ biến, nhưng dường như vẫn không mấy hiệu quả, tốc độ của thiết bị cũng được cải thiện đôi chút, nhưng không đáng kể. Trong trường hợp này, đã đến lúc bạn tính đến chuyện nâng cấp một số bộ phận phần cứng của mình.'+

            'Nhưng lại thêm một vấn đề nữa xuất hiện, nếu ngân sạch của bạn không quá dư giả, chắc hẳn bạn sẽ phải thắc mắc rằng chính xác thì thành phần phần nào sẽ giúp cải thiện hiệu suất của hệ thống tốt nhất? Bạn nên bắt đầu từ đâu? Những nâng cấp nào sẽ mang lại hiệu quả cao nhất với chi phí đầu tư tối ưu nhất? Đây quả thực không phải là một việc đơn giản. <br/> Mặc dù bạn nên luôn để ý điều chỉnh những bản nâng cấp của mình để phù hợp với nhu cầu cụ thể, nhưng dưới đây là một số gợi ý về những gói nâng cấp có ảnh hưởng lớn nhất đến hiệu suất tổng thể của hệ thống, được sắp xếp theo thứ tự từ quan trọng nhất đến ít ảnh hưởng nhất để qua đó, bạn sẽ có được một kế hoạch đầu tư hợp lý cho hệ thống máy tính của mình trong thời gian sắp tới. <br/> RAM <br/> Bổ sung thêm bộ nhớ RAM là một trong những gói nâng cấp cải thiện hiệu suất PC dễ dàng và và hiệu quả nhất mà đa số chúng ta đều có thể thực hiện được.Với giá cả phải chăng, bạn có thể thực hiện nâng cấp này trên hầu như bất kỳ máy tính nào (bao gồm cả các loại máy tính xách tay), và nó cũng không đòi hỏi nhiều kiến thức chuyên sâu về công nghệ. Nếu bạn chưa bao giờ mở cây CPU máy tính của mình ra trước đây thì bây giờ đã đến lúc rồi đó, và các tạo tác cũng rất dễ dàng thôi! Hãy tham khảo bài viết "Hướng dẫn cách nâng cấp RAM trên máy tính và Laptop" của chúng tôi để hiểu rõ hơn về các công đoạn nâng cấp RAM trên một hệ thống máy tính.'+
            
            'RAM'+
            
            'Nâng cấp RAM mang lại hiệu năng tức thời cho hầu hết các PC đang có hiện tượng “lờ đờ”. Đối với các tác vụ tiêu tốn nhiều tài nguyên bộ nhớ như chỉnh sửa video hoặc chơi trò chơi, bạn càng có nhiều RAM thì càng tốt. Ngay cả khi sử dụng với những tác vụ bình thường, lượng RAM phụ sẽ cho phép bạn mở nhiều ứng dụng chạy ẩn hơn, cũng như dễ nhận thấy nhất là bạn có thể làm việc với nhiều tab hơn trong trình duyệt mà không lo chúng bị load lại. <br/> Vậy thì nâng cấp lên bao nhiêu RAM là đủ? 4GB hiện là số dung lượng RAM cơ bản trên hầu hết các thiết bị máy tính cá nhân, nhưng đảm bảo bạn sẽ nhận thấy một cải tiến đáng kể về mặt hiệu năng nếu bạn nâng cấp lên 8GB. Đối với những người thường xuyên phải làm việc với các tác vụ nặng, nên xem xét nâng cấp lên 16GB RAM để có được một mức hiệu năng tối ưu nhất. <br/> Card đồ họa <br/> Có lẽ không có gì lạ khi card đồ họa đứng thứ hai trong danh sách những gói nâng cấp quan trọng nhất đối với hiệu suất của một hệ thống máy tính, nhưng nếu bạn là một game thủ nghiêm túc thì có lẽ card đồ họa nên được xếp ở vị trí đầu tiên thì hợp lý hơn! Còn nếu bạn không phải là một game thủ, hãy những nhà phát triển đồ họa hoặc thiết kế mô hình, hoạt hình 3D thì cũng có thể không cần thiết phải nâng cấp card đồ họa làm gì. <br/> Thực tế mà nói thì không phải đối tượng người dùng nào cũng cần nhiều sức mạnh xử lý đồ họa, vậy nên lược bỏ bớt sức mạnh xử lý đồ họa là một bước đi thông minh và cũng hết sức hợp lý của các nhà sản xuất để tiết kiệm chi phí cũng như mang lại những mức giá bán tốt hơn cho khách hàng. Do đó, các nhà sản xuất máy tính thường có xu hướng chỉ sử dụng card đồ họa tích hợp sẵn trên con chip thay vì card đồ họa chuyên dụng, đó cũng là lý do tại sao nếu bạn đang chỉ sử dụng card đồ tích hợp mà sau đó nâng cấp lên một sản phẩm chuyên dụng, bạn sẽ ngay lập tức nhận ra được những sự thay đổi đến kỳ diệu, đặc biệt là đối với các tác vụ đòi hỏi nhiều đến khả năng xử lý đồ họa như đã nói phía trên. <br/> Mặc dù thực tế là hiệu năng của card đồ họa tích hợp cũng đã được cải thiện đáng kể, thậm chí một số loại còn có hiệu năng tương đương với một vài card đồ họa chuyên dụng giá dưới 2 triệu. Nhưng các chương trình ngày nay cũng không ngừng đòi hỏi yêu cầu xử lý đồ họa cao hơn, vậy nên, nâng cấp lên một sản phẩm có mức giá không quá đắt đỏ, ví dụ như Nvidia GTX 960 có giá bán khoảng chưa đến 4 triệu cũng sẽ là một phương án hợp lý, cung cấp cho bạn một hiệu năng xử lý tốt trong hầu hết các tác vụ đồ họa từ cơ bản đến tương đối nâng cao. Tham khảo bài viết "Danh sách những card đồ họa tốt nhất theo phân khúc giá" của chúng tôi để có một cái nhìn tổng quan về các sản phẩm bạn nên lựa chọn cho lần nâng cấp sắp tới! <br/> Ổ lưu trữ dữ liệu <br/> Có hai lý do để bạn nâng cấp ổ cứng của mình: Một là bạn sắp hết dung lượng lưu trữ hoặc hai là bạn muốn có một hiệu suất xử lý nhanh hơn.'+
            
            'Nếu bạn đã làm mọi thứ có thể để giải phóng dung lượng lưu trữ trên đĩa cứng mà vẫn thường xuyên thiếu dung lượng, thì đã đến lúc bạn phải nâng cấp lên một ổ cứng “ngon” hơn hoặc sử dụng ổ cứng gắn rời. Tuy nhiên, có một điều thú vị là ổ cứng không chỉ quyết định đến việc bao nhiêu dữ liệu sẽ được lưu trữ, mà còn có thể ảnh hưởng rất lớn đến hiệu suất xử lý tổng thể của hệ thống. Hãy cố gắng giữ lại ít nhất 10GB dung lượng trống để hệ điều hành có thể sử dụng cho những lúc cần thiết. <br/> Đối với ổ đĩa cứng (HDD), hãy cân nhắc nâng cấp tốc độ vật lý. Nếu máy tính của bạn hiện có một ổ đĩa 5400RPM, thì việc nâng cấp lên một model 7200RPM sẽ giúp cải thiện tốc độ khá rõ rệt.'+
            
            'Nhưng nếu bạn muốn cải thiện hiệu suất một cách tốt nhất cũng như toàn diện nhất, hãy chuyển sang sử dụng ổ đĩa trạng thái rắn (SSD). SSD sử dụng bộ nhớ flash thay vì một đĩa quay như HDD, và do đó, cho tốc độ đọc ghi nhanh hơn nhiều lần so với ổ đĩa cứng HDD thông thường (chưa kể đến độ tin cậy cũng sẽ cao hơn nữa!). <br/> Phân tích cụ thể, Trung bình, một ổ đĩa 5400RPM có thể đạt được tốc độ đọc ghi lên đến 100MBps, một ổ 7200RPM sẽ có tốc độ đọc ghi lên đến lên đến 150MBps, trong khi ổ đĩa trạng thái rắn SSD có thể sở hữu tốc độ đọc ghi trên 500MB/giây. Các model mới nhất thậm chí có thể có tốc độ nhanh hơn đáng kể, lên đến cả nghìn Mbps. Tuy nhiên, có một nhược điểm đối với các ổ đĩa SSD là chúng có dung lượng nhỏ hơn và đắt hơn nhiều so với các ổ đĩa HDD. <br/> Bộ vi xử lý <br/> Nâng cấp bộ xử lý của PC là một nhiệm vụ khó khăn hơn nhiều so với các các gói nâng cấp khác mà chúng ta đã đề cập đến ở phía trên. Ngoài việc yêu cầu một sự hiểu biết nhất định về mặt chuyên môn, đây không những là một trong những gói nâng cấp đắt tiền hơn cả, mà còn có khả năng phát sinh những vấn đề tương thích nữa. <br/> Tất nhiên, cũng có các vấn đề về tương thích xảy ra trên các gói nâng cấp khác, nhưng chúng có thể được xử lý dễ dàng hơn nhiều. Quan trọng hơn, nâng cấp bộ xử lý không phải lúc nào cũng là điều nên làm và có thể không mang lại nhiều cải thiện về hiệu suất như bạn mong đợi. <br/> Các bài kiểm tra benchmark tại cpubenchmark.net có thể giúp bạn so sánh hiệu suất tương đối của các bộ vi xử lý khác nhau. Nói chung, các thử nghiệm này cho thấy rằng những gói nâng cấp khiêm tốn về bộ xử lý thường không mang lại những cải tiến lớn. Các thử nghiệm chi tiết khác cũng cho thấy hiệu suất của CPU sẽ thay đổi nhiều hay ít tùy thuộc phần lớn vào phần mềm trên hệ thống của bạn. <br/> Phần mềm <br/> Rất có thể các chương trình trên hệ thống của bạn được cài đặt để tự động cập nhật. Nếu không, bạn có thể nhấp vào nút Update ngay khi bạn được thông báo về việc các phiên bản mới của chương trình đó được phát hành.'+
            
            'Trong hầu hết các trường hợp, việc cập nhật lên phiên bản mới là một điều cần thiết phải làm, nhưng không phải lúc nào cũng vậy. Đối với nhiều phần mềm, số hiệu của phiên bản cập nhật được mô tả dưới dạng Major.Minor.Revision. Cụ thể, nếu bạn thấy một bản cập nhật có số hiệu là 0.0.1, thì đó có thể là một bản sửa lỗi. Nếu đó là 0.1.0, thì nó có khả năng là một bản cập nhật nhằm tối ưu hóa và các tính năng mới. Các bản cập nhật nhỏ và bản sửa đổi phải được cài đặt ngay lập tức.'+
            
            'Nhưng các cập nhật chính lại là một vấn đề khác. Hầu như các phiên bản cập nhật chương trình mới đều sẽ sử dụng nhiều tài nguyên hơn các phiên bản cũ, vì vậy nếu phần cứng máy tính của bạn đã đạt đến mức giới hạn tối đa, bạn không nên cập nhật các phiên bản mới này.'+
            
            'Đối với các bản cập nhật hệ điều hành thì cũng tương tự như vậy. Các cập nhật thường xuyên là cần thiết vì lý do hiệu suất và bảo mật, nhưng cập nhật toàn bộ phiên bản mới thì không nên. Các bản cập nhật toàn điện này gần như chắc chắn sẽ có lỗi và có thể khiến hệ thống của bạn chạy chậm đi do phần cứng không theo kịp với những thay đổi quá lớn từ phần mềm.'+
            
            'Nếu PC của bạn vẫn đang hoạt động tốt trên phiên bản phần mềm hiện tại, bạn nên giữ các bản nâng cấp hệ điều hành cho đến khi hoàn toàn chắc chắn rằng chúng sẽ không có bất kỳ lỗi nào và PC của bạn hoàn toàn có thể tương thích được. <br/> Các thành phần khác <br/> o mạch chủ là một trong những gói nâng cấp khó khăn nhất trên máy tính, thậm chí còn phức tạp hơn cả nâng cấp CPU vì đơn giản, tất cả các bộ phận của PC khác đều được gắn vào nó. Gói nâng cấp này chỉ đáng xem xét nếu bạn đã quá bất lực với việc bộ xử lý mới không tương thích với thiết lập hiện tại của bạn.'+
            
            'Ngoài ra, cũng sẽ có những thành phần khác cũng nên được nâng cấp nếu cần thiết. Màn hình là một ví dụ. Lấy trường hợp của các nhiếp ảnh gia chuyên nghiệp chẳng hạn. Các nhiếp ảnh gia chắc chắn sẽ được hưởng lợi nhiều hơn từ việc có một màn hình tốt hơn, giúp cho công cụ Lightroom có thể chạy nhanh hơn một chút. Một nhà phát triển web có thể làm việc năng suất hơn hơn với một màn hình thứ hai, tương tự như một nhà văn với một bàn phím cơ loại tốt. Thay vì tập trung hoàn toàn vào hiệu suất, hãy suy nghĩ về cách bạn có thể cải thiện trải nghiệm của mình đối với những nâng cấp liên quan các đến thiết bị ngoại vi như vậy. Tốc độ xử lý là quan trọng, nhưng nó không phải là điều duy phải suy xét khi nói đến hiệu năng tổng thể.',id:1,
            components:[ { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Ram/B%E1%BB%99%20nh%E1%BB%9B%20DDR3%20G.Skill%208GB%20(1600)%20F3-1600C11S-8GIS.jpg',title:'RAM'},
                         { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/VGA/Card%20m%C3%A0n%20h%C3%ACnh%20Asus%204GB%20Strix-GTX1050TI-DC2O4G-Gaming.jpg',title:'VGA'}]},
            { solution: 'Mua máy tính mới <br/> Tắt chương trình khởi động cùng window <br/> phải phóng ổ cứng <br/> Làm mát máy tính <br/> Diệt virus',problem:'Vậy nguyên nhân gây ra tình trạng đó ở đâu? Hãy cùng Phong Vũ tìm hiểu những nguyên nhân chính gây ra tình trạng này cũng như tìm hiểu về cách khắc phục nhé.'+
            'Muốn cải thiện, tăng tốc hiệu suất cho máy tính thì có rất nhiều cách, nhưng điều trước tiên cần phải tìm hiểu đó là xem xét nguyên nhân nào dẫn đến tình trạng máy chạy “ì ạch”, thậm chí nhiều lúc còn đơ gây ra cảm giác rất khó chịu.'+
            
            '1. MÁY TÍNH BẠN ĐANG SỬ DỤNG ĐÃ QUÁ CŨ'+

            'Nguyên nhân đầu tiên mà Phong Vũ muốn nhắc đến chính là việc có nhiều người sử dụng những chiếc máy tính đời cũ. Việc sử dụng những chiếc máy như vậy trong thời gian dài đồng nghĩa với việc những linh kiện phần cứng của máy đã xuống cấp, khiến hiệu suất sử dụng của máy cũng giảm theo. '+
            
            'Ngày nay, với sự phát triển của công nghệ, những dòng máy tính đang ngày càng được cải thiện hơn về tính năng, hiệu suất sử dụng và độ bền mà giá thành thì không quá cao. Cho dù thế thì đối với nhiều người, đôi khi họ không có đủ điều kiện để trang bị một chiếc máy tính hoàn toàn mới mà thay vào đấy, họ chỉ đủ tiền để mua sắm những linh kiện mới. Đặc biệt là những ai sử dụng laptop đã cũ mà không có khả năng để sắm một chiếc laptop mới hoàn toàn, hãy đọc bài viết Những điều cần biết về nâng cấp laptop ở đây để biết thêm cách nâng cấp, thay thế những linh kiện mới cho chiếc laptop của mình mà không nhất thiết phải mua máy mới. <br/> 2. HỆ THỐNG KHỞI ĐỘNG CHẬM'+
            
            'Việc khởi động Windows sẽ mất một khoảng thời gian nhất định cho dù máy tính tính của bạn cấu hình mạnh hay yếu. Tuy nhiên, các ứng dụng và trình điều khiển cho phép tự động khởi chạy khi bật máy sẽ tạo sự khác biệt trong thời gian khởi động của từng hệ thống. Quá nhiều ứng dụng, hoặc có các ứng dụng nặng được đặt chế độ tự động khởi chạy khi bật máy sẽ làm máy tính của bạn chậm đi đáng kể. Để tăng tốc máy tính, đây là vấn đề mà bạn cần phải lưu ý và nên khắc phục ngay.'+
            
            'Cách tắt bớt các ứng dụng tự động khởi động khi bật máy'+
            
            'Đầu tiên, bạn nhấn tổ hợp phím Windows + R để mở hộp thoại Run. Sau đó, gõ lệnh msconfig.'+
              
            'Lúc này, sẽ hiện ra cửa sổ System Configuration rồi chọn mục Startup. Sau đó, tích vào chuơng trình nào muốn tắt và chọn vào Disable all, sau đó nhấn Apply.'+
 
            'Đấy là đối với Windows 7, còn với Windows 8,8.1 và 10 thì bạn mở mục Startup trong Task Manager. Chọn chương trình mà bạn muốn tắt rồi ấn Disable.'+
  
            '3. Ổ ĐĨA CỨNG MÁY TÍNH BỊ PHÂN MẢNH '+

            'Đây là nguyên nhân rất phổ biến khiến máy tính bị chạy chậm. Nếu bạn thường xuyên truy xuất dữ liệu từ ổ đĩa, rất có thể ổ đĩa của bạn đã bị phân mảnh.'+

            'Nhưng phân mảnh ổ cứng là gì thì muốn hiểu rõ về vấn đề này, bạn cần phải có kiến thức về chia sẻ dữ liệu và cấu tạo của ổ cứng. Bạn chỉ cần hiểu nôm na như thế này, phân mảnh ổ cứng là hiện tượng dữ liệu bị phân tán không theo thứ tự. Điều này có nghĩa,  sau một thời gian sử dụng thì các dữ liệu trên ổ đĩa cứng không được sắp xếp một cách hợp lý và khi muốn sử dụng các dữ liệu này, hệ thống sẽ mất nhiều thời gian để tìm và truy xuất ra các dữ liệu đó cho bạn.'+
            
            'Để khắc phục điều này, bạn có thể sử dụng các phần mềm chống phân mảnh ổ cứng như Smart Defrag hoặc Defraggler. Ngoài ra, bạn có thể sử dụng tính năng chống phân mảnh của chính Windows để khắc phục tình trạng này, bằng cách click chuột phải vào biểu tưởng ổ cứng cần chống phân mảnh, chọn Properties > Tools > Defragment Now.' +
            
            '4. Ổ CỨNG BỊ ĐẦY'+
            
            'Lại thêm một nguyên nhân đến từ chiếc ổ cứng của bạn khiến máy tính chạy chậm. Nếu ổ cứng của bạn chứa quá nhiều dữ liệu thì điều dễ nhận thấy nhất là việc truy cập vào ổ cứng thôi cũng đã mất nhiều thời gian rồi.'+

            'Nếu ổ cứng đầy, nó sẽ có màu đỏ như ảnh trên và việc bạn cần làm là ngồi xem trong ổ cứng của mình có dữ liệu nào không quan trọng hoặc không cần thiết thì hãy xóa nó đi, tạo vùng không gian trống càng nhiều càng tốt cho ổ cứng để có thể tăng tốc cho máy tính.'+
            
            'Một lưu ý rằng nhiều người có quen thói quen lưu trữ dữ liệu vào ổ C – ổ chứa hệ thống. Đây không phải là một thói quen tốt nếu bạn không muốn máy bạn đã chậm thì lại càng chạy chậm hơn. Vì khi ổ C càng đầy nhanh, thì tốc độ xử lý của máy càng chậm hơn so với việc để khoảng không gian lớn cho ổ C.'+
            
            '5. PAGEFILE CẤU HÌNH KHÔNG ĐÚNG'+
            
            'Pagefile là một tập tin trên ổ cứng, được Windows sử dụng làm bộ nhớ ảo để lưu trữ các chương trình và dữ liệu, khi bộ nhớ RAM không đủ chỗ chứa. Do đó, nếu bị cấu hình sai, máy tính có thể sẽ hoạt động chậm hoặc thỉnh thoảng hiện thông báo lỗi.'+
            
            'Thông thường Windows sẽ tự điều chỉnh Pagefile sao cho tốt nhất, tuy nhiên đôi khi dung lượng của Pagefile không được tăng một cách tương ứng với các ứng dụng nặng nên thỉnh thoảng có thể sinh lỗi.'+
            
            'Cách khắc phục vấn đề này cũng khá đơn giản. Bạn chỉ cần thực hiện vài thao tác sau là được.'+
            
            'Đầu tiên, bạn chuột phải vào My Computer > Properties'+

            'Tiếp theo, bạn chọn Advance > Performance > Settings '+

            'Tiếp tục vào phần Advance > Change > Bỏ dấu tích ở dòng đầu tiên > Custom size. Ở phần Custom size bạn nên điền dung lượng lớn hơn khoảng 1,5 lần so với dung lượng RAM của mình. Sau đó nhấn OK là xong.'+
            
            '6. XÓA BỎ BỚT FILE TẠM (TEMP FILE)'+
            
            'Temp File là những file được tạo ra trong quá trình sử dụng của một số ứng dụng hay trong quá trình duyệt web để giúp người dùng có thể sử dụng, truy cập một cách nhanh hơn. Một điều đáng nói là sau khi các chương trình, ứng dụng hay trình duyệt web đã tắt đi sau khi sử dụng thì Windows lại không xóa những temp file đó đi. Cứ như thế, sau một thời gian sử dụng, nếu bạn không xóa bớt những file tạm này đi thì nó sẽ chiếm khá nhiều dung lượng của máy gây ra tình trạng lãng phí không gian sử dụng, dẫn tới máy tính bị chậm hẳn đi.'+
            
            'Để xóa những file tạm này bạn có thể sử dụng một số phần mềm chuyên dụng như CCleaner, Temp file Cleaner hoặc sử dụng ngay phần mềm chuyên dọn những file tạm của Windows đó là Disk Cleanup, được mở bằng cách gõ lệnh cleanmgr.exe vào hộp thoại Run.'+
            
            '7. SỬ DỤNG CÁC PHẦN MỀM DIỆT VIRUS'+
            
            'Virus máy tính thì ai cũng biết, nhưng phần mềm diệt Virus thì nó lại phức tạp hơn bạn nghĩ. Dù chức năng chính của những phần mềm này là diệt Virus cho máy tính nhưng đây cũng là nguyên nhân chính khiến máy tính của bạn chạy chậm hẳn đi. Lí do vì hầu hết các phần mềm diệt virus khi sử dụng, chúng đều chiếm khá lớn tài nguyên của máy.'+
  
            'Do đó, bạn nên kiểm tra lại tình trạng của nó nếu chiếm dụng quá nhiều Ram và CPU, bạn hãy tạm thời tắt chúng đi, hoặc nếu tình trạng chậm máy thường xuyên thì điều tốt nhất là nên gỡ những phần mềm đấy đi. Và điều quan trọng hơn là máy bạn có bị nhiễm những mã độc hay virus các thứ thì nó phụ thuộc vào thói quen sử dụng máy tính của bạn.'+
            
            '8. HÃY LÀM MÁT MÁY TÍNH KHI DÙNG'+
            
            'Khi sử dụng máy tính, một điều tất nhiên là máy sẽ tỏa ra hơi nóng phụ thuộc vào bạn dùng nhiều hay ít tác vụ. Điều bạn cần làm ở đây là cố gắng phân tán sự tỏa nhiệt của máy bằng cách nâng cấp bộ phận tản nhiệt của case máy tính bàn, sử dụng đế tản nhiệt đối với laptop (lưu ý đừng để laptop lên chăn gối hay thứ gì đấy che hết phần tỏa nhiệt của máy).'+
  
            'Máy tính sẽ hoạt động chậm hơn rất nhiều nếu tản nhiệt không tốt. Điều này không chỉ ảnh hưởng đến hiệu suất của máy mà còn làm giảm tuổi thọ của chúng, mà như thế thì máy bạn sẽ nhanh trở thành máy cũ hơn so với những máy có tản nhiệt tốt.',id:2},
            { link: require('../../Pictures/News/Huong-khac-phuc-tinh-trang-laptop-bi-nong.jpg'),title:'LÀM THẾ NÀO ĐỂ KHẮC PHỤC TÌNH TRẠNG LAPTOP BỊ NÓNG ',id:3},
            { link: require('../../Pictures/News/5-thanh-phan-de-hong-nhat-tren-PC.jpg'),title:'5 THÀNH PHẦN DỄ HỎNG NHẤT TRÊN PC',id:4},
            { link: require('../../Pictures/News/Cac-loi-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'CÁC LỖI THƯỜNG GẶP TRÊN MÁY TÍNH VÀ CÁCH KHẮC PHỤC - PHẦN 1',id:5},
          ],
          activeSlide:0,
          dataProblem:null,
          dataSolution:null,
          dataTitle:[],
          dataComponents:null,
        }
    }
    componentDidMount(){
      readdata();
    }
    _renderItem_HP ({item, index}) {
        return (
          <View style={{flex:1,flexDirection:'column',paddingLeft:5}}>
              <Image source={{uri:item.link}} 
                    style={{width: 200, height: 200}} />
              <Text>{item.title}</Text>
          </View>
      );}
    render(){
        const itemId = this.props.navigation.getParam('id', 'NO-ID');
        const id=JSON.stringify(itemId);
        readdata=()=>{
            this.state.entries_HP.forEach(element => {
                if(element.id==id)
                {
                    data_problem=element.problem;
                    data_problem = data_problem.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g," ");
                    this.setState({dataProblem:data_problem});
                    data_solution=element.solution;
                    data_solution = data_solution.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g," ");
                    this.setState({dataSolution:data_solution});
                    this.setState({dataTitle:element.components})
                }
            })
        }
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5 }}> 
                        <Text >{this.state.dataProblem}</Text>
                    </View>
                    <View style={{borderColor:'black',borderWidth:3,flex:1 ,padding:5,marginTop:10 }}> 
                        <Text >{this.state.dataSolution}</Text>
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
  
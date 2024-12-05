import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('sports');  // replace with your database name
    const collection = db.collection('users')
    const formattedData = [
        { _id: new ObjectId(), idname: 6857, firstname: "กฤฬณัญญ์", lastname: "เขียวอิ่ม", nickname: "เฌอเบล" },
        { _id: new ObjectId(), idname: 6903, firstname: "ปิย์วรา", lastname: "ประสงค์", nickname: "ออกัส" }, 
        { _id: new ObjectId(), idname: 7292, firstname: "วรธรรม", lastname: "เดชมณี", nickname: "ซีซ่าร์" },
        { _id: new ObjectId(), idname: 7687, firstname: "ฆนฤต", lastname: "พรหมนิมิตร", nickname: "ตั้งใจ" }, 
        { _id: new ObjectId(), idname: 7697, firstname: "สาริศา", lastname: "ปกรณ์ยุทธ", nickname: "รีส" }, 
        { _id: new ObjectId(), idname: 7698, firstname: "สุทธิวรี", lastname: "รักตประจิต", nickname: "ซอนต้า" }, 
        { _id: new ObjectId(), idname: 6858, firstname: "กษิดิศ", lastname: "ศุภคต", nickname: "นะโม" }, 
        { _id: new ObjectId(), idname: 6879, firstname: "ทิพธัช", lastname: "ดัชถุยาวัตร", nickname: "ต้นกล้า" }, 
        { _id: new ObjectId(), idname: 6883, firstname: "วรดนัย", lastname: "สีตบุตร", nickname: "ทัด" }, 
        { _id: new ObjectId(), idname: 6934, firstname: "ศิรดา", lastname: "สังโขบล", nickname: "พลอยพิม" }, 
        { _id: new ObjectId(), idname: 6941, firstname: "เอกธิดา", lastname: "โพธิ์พูนศักดิ์", nickname: "ลูกบัว" }, 
        { _id: new ObjectId(), idname: 7700, firstname: "อาทิตยา", lastname: "มารอด", nickname: "เปลหวาย" }, 
        { _id: new ObjectId(), idname: 8021, firstname: "อชิระ", lastname: "ดุละลัมพะ", nickname: "ต้นสน" }, 
        { _id: new ObjectId(), idname: 6854, firstname: "กฤติเดช", lastname: "บวรวัฒนดิลก", nickname: "ตังทอน" }, 
        { _id: new ObjectId(), idname: 6867, firstname: "ณภัสนันท์", lastname: "ศรีจิตรพงศ์", nickname: "มีนา" }, 
        { _id: new ObjectId(), idname: 6876, firstname: "ทัชชล", lastname: "เกตุนุติ", nickname: "กานต์" }, 
        { _id: new ObjectId(), idname: 6880, firstname: "ธรธาดา", lastname: "อรุณภู่", nickname: "ฮาชิ" }, 
        { _id: new ObjectId(), idname: 7695, firstname: "ณัชชาพัชร์", lastname: "ใต้บวรพิทักษ์", nickname: "เพลิน" }, 
        { _id: new ObjectId(), idname: 6578, firstname: "กฤษฏ์", lastname: "บุญสาย", nickname: "คริส" }, 
        { _id: new ObjectId(), idname: 6630, firstname: "ปูรณ์ภัสสร", lastname: "ฉายบาง", nickname: "ออมบุญ" }, 
        { _id: new ObjectId(), idname: 6650, firstname: "มณีจันทร์", lastname: "บุญเพ็ญ", nickname: "จันทร์แก้ว" }, 
        { _id: new ObjectId(), idname: 6661, firstname: "สิธา", lastname: "รอยตระกูล", nickname: "สิธา" }, 
        { _id: new ObjectId(), idname: 6721, firstname: "แพทริค", lastname: "ท็อป ฮัซซี่", nickname: "แพทริค" }, 
        { _id: new ObjectId(), idname: 6942, firstname: "คนที", lastname: "ไกรฤกษ์", nickname: "ที" },
        { _id: new ObjectId(), idname: 7571, firstname: "ปฐมาภรณ์", lastname: "พรหมานุกูล", nickname: "โรวี่" }, 
        { _id: new ObjectId(), idname: 6611, firstname: "ธัชพล", lastname: "ชูโต", nickname: "ภัค" }, 
        { _id: new ObjectId(), idname: 6628, firstname: "ปาณิสรา", lastname: "วุฒิโฆสิต จันทรสวัสด", nickname: "คาล่า" }, 
        { _id: new ObjectId(), idname: 6629, firstname: "ปุณยธร", lastname: "สุขภารังษี", nickname: "น้ำมนต์" }, 
        { _id: new ObjectId(), idname: 6643, firstname: "ฟองทะเล", lastname: "ทองสมัคร", nickname: "ซีเชล" }, 
        { _id: new ObjectId(), idname: 7541, firstname: "ณัฐชานนท์", lastname: "ยงกฤตยา", nickname: "ปอนด์" }, 
        { _id: new ObjectId(), idname: 7561, firstname: "สิปปกร", lastname: "บูรณะบุญวงศ์", nickname: "ฟีฟ่า" }, 
        { _id: new ObjectId(), idname: 6399, firstname: "อัฑฒ์", lastname: "เลียงธนสาร", nickname: "พีพี" }, 
        { _id: new ObjectId(), idname: 6590, firstname: "ชวการ", lastname: "แต้ประยูร", nickname: "ไอซ์" }, 
        { _id: new ObjectId(), idname: 6627, firstname: "ปาณิสรา", lastname: "สุกุมลจันทร์", nickname: "ปริม" },
        { _id: new ObjectId(), idname: 6669, firstname: "อรพิม", lastname: "ตันตยาภิรม", nickname: "พิม" }, 
        { _id: new ObjectId(), idname: 7540, firstname: "ณรอลภง", lastname: "มุตตามระ", nickname: "อินดี้" },
        { _id: new ObjectId(), idname: 6308, firstname: "กวีวัฒน์", lastname: "สุนทรนนท์", nickname: "อัลฟ่า" }, 
        { _id: new ObjectId(), idname: 6316, firstname: "จิรายุ", lastname: "สุจริตกุล", nickname: "เป้ปเป้อ" },
        { _id: new ObjectId(), idname: 6322, firstname: "ณฐมน", lastname: "ลักษณโกเศศ", nickname: "เพลง" }, 
        { _id: new ObjectId(), idname: 6380, firstname: "วิชญ์พล", lastname: "อิงคุลานนท์", nickname: "ต้นกล้า" }, 
        { _id: new ObjectId(), idname: 6386, firstname: "สรัล", lastname: "สรัคคานนท์", nickname: "ไทย" }, 
        { _id: new ObjectId(), idname: 7180, firstname: "ปณัฐสนันทน์", lastname: "ปุณยานันต์", nickname: "เนวี่" },
        { _id: new ObjectId(), idname: 6353, firstname: "ปุริมปรัชญ์", lastname: "โกสุมสุรังค์", nickname: "ข้าวสวย" },
        { _id: new ObjectId(), idname: 6366, firstname: "ภาวัชร", lastname: "วงษ์วานิช", nickname: "เปรม" }, 
        { _id: new ObjectId(), idname: 6372, firstname: "รวิภา", lastname: "มนต์มณีรัตน์", nickname: "ลูกแก้ว" }, 
        { _id: new ObjectId(), idname: 6374, firstname: "รวิสรา", lastname: "สุขะกุล", nickname: "ริกะ" },
        { _id: new ObjectId(), idname: 6675, firstname: "พิทย์", lastname: "พรจําเริญ", nickname: "พิตย์" }, 
        { _id: new ObjectId(), idname: 7161, firstname: "ฐนภัฎ", lastname: "พลอยมณีวงษ์", nickname: "โอม" },
        { _id: new ObjectId(), idname: 7181, firstname: "ปราณปรีย์", lastname: "คงชาตรี", nickname: "ปัน" },
        { _id: new ObjectId(), idname: 7184, firstname: "มนต์สรวง", lastname: "สุขารมณ์", nickname: "แพท" },
        { _id: new ObjectId(), idname: 6103, firstname: "พีร", lastname: "อรรถจินดา", nickname: "อินโทร" },
        { _id: new ObjectId(), idname: 6107, firstname: "ภัทรศยา", lastname: "เจริญพานิช", nickname: "วุ้น" },
        { _id: new ObjectId(), idname: 6111, firstname: "รัตน์ธรรศ", lastname: "ทิพย์ปรักมาศ", nickname: "ปลื้ม" },
        { _id: new ObjectId(), idname: 6112, firstname: "ริณดา", lastname: "สุตเธียรกุล", nickname: "เฌอแตม" },
        { _id: new ObjectId(), idname: 6186, firstname: "ธาวิน", lastname: "ประชาศรี", nickname: "โอมใหญ่" },
        { _id: new ObjectId(), idname: 6965, firstname: "ณิชชา", lastname: "ก่อเฉลิมสนธิ", nickname: "เค้ก" },
        { _id: new ObjectId(), idname: 6972, firstname: "ณวรา", lastname: "นวราช", nickname: "ณิณี" },
        { _id: new ObjectId(), idname: 7825, firstname: "สุรดิษ", lastname: "แสงทอง", nickname: "กันสึ" },
        { _id: new ObjectId(), idname: 6094, firstname: "พริม", lastname: "อินทรกำเนิด", nickname: "พริม" },
        { _id: new ObjectId(), idname: 6954, firstname: "ประกรเกียร", lastname: "พลจันทร์", nickname: "พร้อม" },
        { _id: new ObjectId(), idname: 6109, firstname: "ภาสวิชญ์", lastname: "อ่ำครองธรรม", nickname: "ด้าย" },
        { _id: new ObjectId(), idname: 6051, firstname: "ขวัญสุภา", lastname: "ลียะวณิช", nickname: "น้ำปาย" },
        { _id: new ObjectId(), idname: 6106, firstname: "ภณ", lastname: "กองพลพรหม", nickname: "ภณ" },
        { _id: new ObjectId(), idname: 6970, firstname: "ฌานิสา", lastname: "คูสิทธิผล", nickname: "เอ๋ยเอ๊ย" },
        { _id: new ObjectId(), idname: 5885, firstname: "อิทธิวัฒน์", lastname: "คุณวัฒน์", nickname: "กันต์" },
        { _id: new ObjectId(), idname: 5830, firstname: "ธีรัตม์ดลฉัตร", lastname: "ฉัตรชัย", nickname: "สิทธา" },
        { _id: new ObjectId(), idname: 5874, firstname: "สัพพสิทธิ์", lastname: "สิริเจริญสุข", nickname: "อิน" },
        { _id: new ObjectId(), idname: 5872, firstname: "สมิทธิ์", lastname: "แสนมะโน", nickname: "วาวา" },
        { _id: new ObjectId(), idname: 5921, firstname: "ดนย์", lastname: "เลอศักดิ์รัศมี", nickname: "ดนย์" },
        { _id: new ObjectId(), idname: 6697, firstname: "รัชต์กานต์", lastname: "คงเพชร", nickname: "แซก" },
        { _id: new ObjectId(), idname: 5820, firstname: "ณัฏฐนันท์", lastname: "ศรีจิตรพงศ์", nickname: "นาโน" },
        { _id: new ObjectId(), idname: 5873, firstname: "สหัสพัฒน์", lastname: "เปล่งพานิช", nickname: "ใบข้าว" },
        { _id: new ObjectId(), idname: 6706, firstname: "ธีรดา", lastname: "หะวานนท์", nickname: "ธีนี่" },
        { _id: new ObjectId(), idname: 5928, firstname: "เอมธิดา", lastname: "สอาดสุด", nickname: "เอม" },
        { _id: new ObjectId(), idname: 5815, firstname: "ณภนารี", lastname: "กัลวงษ์", nickname: "ปลายฟ้า" },
        { _id: new ObjectId(), idname: 5809, firstname: "จิดาภา", lastname: "ขาวงาม", nickname: "โมจิ" },
        { _id: new ObjectId(), idname: 5867, firstname: "วิชิตา", lastname: "พุ่มศุขโข", nickname: "มินนี่" },
        { _id: new ObjectId(), idname: 5864, firstname: "วงศ์เธียร", lastname: "เทพานนท์", nickname: "พุดจีน" },
        { _id: new ObjectId(), idname: 5589, firstname: "นนท์ปวิธ", lastname: "อุทัยสาง", nickname: "นนท์" },
        { _id: new ObjectId(), idname: 5641, firstname: "อินทัช", lastname: "สีมันตร", nickname: "อัส" },
        { _id: new ObjectId(), idname: 6427, firstname: "ณัฐวิภา", lastname: "บุญณะ", nickname: "แสตมป์" },
        { _id: new ObjectId(), idname: 5578, firstname: "ติชิลา", lastname: "คงมั่น", nickname: "ต้อดต่อ" },
        { _id: new ObjectId(), idname: 5627, firstname: "สรรค์พงศ์", lastname: "ธรรมศักดิ์", nickname: "จ๊อบ" },
        { _id: new ObjectId(), idname: 5558, firstname: "เจกิตาน์", lastname: "นันทนาปราโมทย์", nickname: "จาด้า" },
        { _id: new ObjectId(), idname: 5572, firstname: "ณัฐณิชา", lastname: "กฤติยาวงศ์", nickname: "จั้ด" },
        { _id: new ObjectId(), idname: 5888, firstname: "ไกรวิชญ์", lastname: "ชมอุตม์", nickname: "แซลม่อน" },
        { _id: new ObjectId(), idname: 7587, firstname: "ศศิพิมพ์", lastname: "สุขประดิษฐ", nickname: "พอเพียง" },
        { _id: new ObjectId(), idname: 5567, firstname: "ณฐนันท์", lastname: "พันลึกเดช", nickname: "มีมี่" },
        { _id: new ObjectId(), idname: 6411, firstname: "ฉัตรชนก", lastname: "หรั่งศิริ", nickname: "ฟิวเจอร์" }
    ];

    await collection.insertMany(formattedData);
    console.log('success');

    return NextResponse.json({ message: 'Users added successfully' });
      
    } catch (error) {
        console.log('Fail')
        return NextResponse.json({ message: 'Failed to insert data' }, { status: 500 });    
    }
}
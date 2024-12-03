import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminIndex() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Tabs defaultValue="incoming">
        <TabsList>
          <TabsTrigger value="incoming">รอเรียกคิว ()</TabsTrigger>
          <TabsTrigger value="called">คิวที่เรียกไปแล้ว ()</TabsTrigger>
        </TabsList>
        <TabsContent value="incoming">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">เลขคิว</TableHead>
                <TableHead>รหัสนักศึกษา</TableHead>
                <TableHead>ชื่อ-นามสกุล</TableHead>
                <TableHead>รายการติดต่อ</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {data.map((item) => (
                <TableRow key={item.no}>
                  <TableCell className="font-medium">
                    {item.studentId}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.request}</TableCell>
                  <TableCell>{item.note}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="called"></TabsContent>
      </Tabs>
    </div>
  );
}

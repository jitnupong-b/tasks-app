import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks_high: any[] = [
    {
      title: 'ทำรายงานประจำเดือน',
      description: 'สรุปยอดขายและวิเคราะห์ผลประกอบการ',
      dueDate: '2024-03-15',
      priority: 'high',
      status: 'done',
    },
    {
      title: 'จัดประชุมทีม',
      description: 'ประชุมติดตามความคืบหน้าโครงการ',
      dueDate: '2024-03-18',
      priority: 'high',
    },
    {
      title: 'ติดตามการชำระเงินลูกค้า',
      description: 'ตรวจสอบและติดตามยอดค้างชำระ',
      dueDate: '2024-03-28',
      priority: 'high',
    },
    {
      title: 'จัดทำแผนงานสัปดาห์หน้า',
      description: 'วางแผนงานและกำหนดเป้าหมายสัปดาห์หน้า',
      dueDate: '2024-03-19',
      priority: 'high',
      status: 'done',
    },
  ];

  tasks_medium: any[] = [
    {
      title: 'ตรวจสอบสินค้าคงคลัง',
      description: 'นับจำนวนสินค้าและปรับปรุงข้อมูลในระบบ',
      dueDate: '2024-03-20',
      priority: 'medium',
    },
    {
      title: 'จัดเตรียมใบเสนอราคา',
      description: 'เตรียมใบเสนอราคาสำหรับลูกค้าใหม่',
      dueDate: '2024-03-21',
      priority: 'medium',
      status: 'done',
    },
    {
      title: 'อัพเดทเว็บไซต์',
      description: 'เพิ่มข้อมูลสินค้าใหม่ลงเว็บไซต์',
      dueDate: '2024-03-25',
      priority: 'medium',
    },
  ];

  tasks_low: any[] = [
    {
      title: 'เตรียมเอกสารประกอบการอบรม',
      description: 'จัดทำเอกสารสำหรับอบรมพนักงานใหม่',
      dueDate: '2024-03-30',
      priority: 'low',
    },
    {
      title: 'สำรองข้อมูลระบบ',
      description: 'สำรองฐานข้อมูลและไฟล์สำคัญ',
      dueDate: '2024-03-22',
      priority: 'low',
    },
    {
      title: 'ทำความสะอาดอุปกรณ์',
      description: 'ทำความสะอาดและบำรุงรักษาอุปกรณ์สำนักงาน',
      dueDate: '2024-03-27',
      priority: 'low',
    },
  ];
  constructor() {}

  addNewTask() {
    console.log('Add new task');
  }
}

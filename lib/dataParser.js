import fs from 'fs';
import path from 'path';

// Get project data from JSON file
export const getProjectData = () => {
  const filePath = path.join(process.cwd(), 'project_data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

// Get specific section from project data
export const getDataSection = (section) => {
  const data = getProjectData();
  return data[section] || null;
};

// Get page data for specific routes
export const getPageData = (page) => {
  const data = getProjectData();
  
  switch (page) {
    case 'home':
      return {
        banner: data.banner,
        feature: {
          title: 'Lợi thế cạnh tranh của chúng tôi',
          features: data.marketAnalysis.advantages
        },
        services: data.services,
        workflow: {
          title: 'Quy trình làm việc',
          description: 'Quy trình đơn giản và hiệu quả để kết nối gia sư với học sinh',
          workflow_list: data.operatingModel.process
        },
        call_to_action: data.call_to_action
      };
    
    case 'tutor':
      return {
        title: 'Dành cho Gia sư',
        description: 'Tham gia cùng chúng tôi để có cơ hội dạy học và phát triển bản thân',
        benefits: data.expectedOutcomes,
        process: data.operatingModel.process
      };
    
    case 'parent':
      return {
        title: 'Dành cho Phụ huynh',
        description: 'Tìm kiếm gia sư chất lượng cho con em của bạn',
        goals: data.objectives.specificGoals,
        advantages: data.marketAnalysis.advantages
      };
    
    case 'process':
      return {
        title: 'Quy trình làm việc',
        description: 'Quy trình đơn giản và minh bạch để kết nối gia sư với học sinh',
        steps: data.operatingModel.process
      };
    
    case 'faq':
      return {
        title: 'Câu hỏi thường gặp',
        description: 'Những thắc mắc phổ biến về dịch vụ gia sư của chúng tôi',
        faqs: data.faq
      };
    
    case 'contact':
      return {
        title: 'Liên hệ với chúng tôi',
        description: 'Hãy liên hệ để được tư vấn miễn phí về dịch vụ gia sư',
        contact: data.contact
      };
    
    default:
      return null;
  }
};
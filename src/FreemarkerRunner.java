import freemarker.template.*;
import java.util.*;
import java.io.*;

public class FreemarkerRunner {
    public static void main(String[] args) {
        try {
            Configuration cfg = new Configuration(Configuration.VERSION_2_3_34);
            cfg.setDirectoryForTemplateLoading(new File("templates"));
            cfg.setDefaultEncoding("UTF-8");

            Template template = cfg.getTemplate("dashboard.ftl");

            List<Map<String, String>> employees = new ArrayList<>();
            employees.add(Map.of(
                "id", "1",
                "firstName", "Alice",
                "lastName", "Smith",
                "email", "alice@example.com",
                "department", "HR",
                "role", "Manager"
            ));
            employees.add(Map.of(
                "id", "2",
                "firstName", "Bob",
                "lastName", "Johnson",
                "email", "bob@example.com",
                "department", "IT",
                "role", "Developer"
            ));
            employees.add(Map.of(
                "id", "3",
                "firstName", "Charlie",
                "lastName", "Lee",
                "email", "charlie@example.com",
                "department", "Finance",
                "role", "Analyst"
            ));

            Map<String, Object> dataModel = new HashMap<>();
            dataModel.put("title", "Employee Directory");
            dataModel.put("employees", employees);

            File outDir = new File("output");
            if (!outDir.exists()) {
                outDir.mkdirs();
            }

            Writer out = new FileWriter("output/dashboard.html");
            template.process(dataModel, out);
            out.close();

            System.out.println("✅ dashboard.html generated successfully.");

        } catch (Exception e) {
            System.err.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

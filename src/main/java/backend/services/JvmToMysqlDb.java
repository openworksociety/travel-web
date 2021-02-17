package backend.services;

import backend.annotations.PrimaryKey;
import backend.domain.InterfaceDomain;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;

/**
 * Converts Java domain class to create table script for MariaDb / Mysql DB 5.7.x
 */
public class JvmToMysqlDb {

    private static String convertJavaToMysqlDataType(Class<?> javaClassField) {
        switch (javaClassField.getSimpleName()) {
            case "String":
                return "text";
            case "int":
                return "int";
            default:
                throw new RuntimeException(new Exception("This seem not handled yet, sorry :-/"));
        }
    }

    public static String getCols(Class<?> domainClass) {
        Field[] allFields = domainClass.getDeclaredFields();

        Object[] objectArray = Arrays.stream(allFields).map(curr ->
                "" + curr.getName() + " " + convertJavaToMysqlDataType(curr.getType())
        ).toArray();

        return String.join(",\n ",
                Arrays.copyOf(objectArray, objectArray.length, String[].class));
    }

    public static String getDropTableStatement(Class<? extends InterfaceDomain> inputJavaClass) {
        return "drop table if exists " +
                inputJavaClass.getSimpleName().toLowerCase();
    }

    public static String getCreateTableStatement(Class<? extends InterfaceDomain> inputJavaClass) {
        return "create table " +
                inputJavaClass.getSimpleName().toLowerCase() +
                "(\n" +
                getCols(inputJavaClass) +
                getPrimaryKeyColumns(inputJavaClass) +
                "\n)";
    }

    public static String getPrimaryKeyColumns(Class<?> domainClass) {
        List<Field> primaryKeyFields = Arrays.stream(domainClass.getDeclaredFields())
                .filter(curr ->
                        Arrays.stream(curr.getDeclaredAnnotations())
                                .filter(currAnnotation ->
                                        currAnnotation
                                                .annotationType()
                                                .getSimpleName().equals(PrimaryKey.class.getSimpleName()))
                                .limit(1)
                                .count() != 0
                ).collect(toList());
        if (primaryKeyFields.isEmpty()) {
            return "";
        }
        List<String> primaryKeyFieldNames = primaryKeyFields
                .stream()
                .map(curr -> curr.getName())
                .collect(toList());

        String primaryKeyColumns = String.join(", ", primaryKeyFieldNames);
        return ",\n" +
                "    PRIMARY KEY(" + primaryKeyColumns + ")\n";
    }
}

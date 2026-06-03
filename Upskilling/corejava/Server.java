import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {

        try {

            ServerSocket server =
                    new ServerSocket(5000);

            System.out.println("Waiting for client...");

            Socket socket = server.accept();

            System.out.println("Client connected");

            BufferedReader br =
                    new BufferedReader(
                            new InputStreamReader(socket.getInputStream()));

            String msg = br.readLine();

            System.out.println("Client says: " + msg);

            server.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}